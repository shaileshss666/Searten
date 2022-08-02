package com.example.Seartenprojectmanagement.Controller;


import com.example.Seartenprojectmanagement.Model.*;
import com.example.Seartenprojectmanagement.Model.Req.NewMemberReq;
import com.example.Seartenprojectmanagement.Model.Req.NewProjectReq;
import com.example.Seartenprojectmanagement.Repository.ProjectRepository;
import com.example.Seartenprojectmanagement.Repository.ResearcherProjectRepository;
import com.example.Seartenprojectmanagement.Repository.UserProjectRepository;
import com.example.Seartenprojectmanagement.Repository.UserRepository;
import org.springframework.security.access.method.P;
import org.springframework.web.bind.annotation.*;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/projectManagement")
public class ProjectController {

    private final ProjectRepository projectRepository;


    public ProjectController(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;

    }

    @PostMapping("/newProject")
    public String createNewProject(@RequestBody NewProjectReq projectReq) {
        //lin gao
        return "saved";
    }
}
