package com.example.Seartenprojectmanagement.Controller;

import com.example.Seartenprojectmanagement.Model.*;
import com.example.Seartenprojectmanagement.Model.Req.NewMemberReq;
import com.example.Seartenprojectmanagement.Repository.ProjectRepository;
import com.example.Seartenprojectmanagement.Repository.ResearcherProjectRepository;
import com.example.Seartenprojectmanagement.Repository.UserProjectRepository;
import com.example.Seartenprojectmanagement.Repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/projectManagement/project")
public class MemberController {

    private final ProjectRepository projectRepository;
    private final UserProjectRepository userProjectRepository;
    private final UserRepository userRepository;
    private final ResearcherProjectRepository researcherProjectRepository;

    public MemberController(ProjectRepository projectRepository, UserProjectRepository userProjectRepository,
                             UserRepository userRepository, ResearcherProjectRepository researcherProjectRepository) {
        this.projectRepository = projectRepository;
        this.userProjectRepository = userProjectRepository;
        this.userRepository = userRepository;
        this.researcherProjectRepository = researcherProjectRepository;
    }

    @GetMapping("/{projectId}/members")
    public List<ResearcherProject> getResearcherByProjectId (@PathVariable(value = "projectId") int projectId) {
        return researcherProjectRepository.findByProjectId(projectId);
    }


    @PostMapping("/{projectId}/addMember")
    public ResearcherProject addMemberToProject(@RequestBody NewMemberReq newMemberReq,
                                     @PathVariable (value = "projectId") int projectId) {
        String email = newMemberReq.email;
        String role = newMemberReq.role;

        User user = userRepository.findUserByEmail(email);
        Project project = projectRepository.findById(projectId);

        UserProjectKey key = new UserProjectKey(user.getId(), projectId);

        UserProject userProject = new UserProject(key, user, project, 1, 0, 0);
        userProjectRepository.save(userProject);

        Date date = new Date();
        ResearcherProject researcherProject = new ResearcherProject(key, user, project, date, role);
        researcherProjectRepository.save(researcherProject);

        return researcherProject;
    }
}
