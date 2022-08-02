package com.example.Seartenprojectmanagement.Controller;

import com.example.Seartenprojectmanagement.Model.Project;
import com.example.Seartenprojectmanagement.Model.Req.NewTaskReq;
import com.example.Seartenprojectmanagement.Model.ResearcherProject;
import com.example.Seartenprojectmanagement.Model.Task;
import com.example.Seartenprojectmanagement.Repository.ProjectRepository;
import com.example.Seartenprojectmanagement.Repository.ResearcherProjectRepository;
import com.example.Seartenprojectmanagement.Repository.TaskRepository;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/projectManagement/project")
public class TaskController {

    private final TaskRepository taskRepository;
    private final ProjectRepository projectRepository;
    private final ResearcherProjectRepository researcherProjectRepository;

    public TaskController(TaskRepository taskRepository, ProjectRepository projectRepository,
                          ResearcherProjectRepository researcherProjectRepository) {
        this.taskRepository = taskRepository;
        this.projectRepository = projectRepository;
        this.researcherProjectRepository = researcherProjectRepository;
    }


    @GetMapping("/task/{taskId}")
    public Task getTaskDetail (@PathVariable (value = "taskId") Long taskId) {
        return taskRepository.findTaskById(taskId);
    }


    @GetMapping("/{projectId}/{userId}/tasks")
    public List<Task> getAllTaskOfProject (@PathVariable (value = "projectId") int projectId,
                                           @PathVariable (value = "userId") int userId) {
        return researcherProjectRepository.findTaskByProjectIdAndUserId(projectId, userId);
    }


    @PostMapping("/{projectId}/{userId}/createTask")
    public String createNewTask (@RequestBody NewTaskReq taskReq,
                                 @PathVariable (value = "projectId") int projectId,
                                 @PathVariable (value = "userId") int userId) throws ParseException {

        ResearcherProject researcherProject = researcherProjectRepository.findByProjectIdAndUserId(projectId, userId);

        String task_name = taskReq.title;
        String description = taskReq.description;

        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);
        Date start_date = formatter.parse(taskReq.start_date);
        Date end_date = formatter.parse(taskReq.end_date);

        String specialCase = taskReq.specialCase;

        Long ancestor = taskReq.ancestor;

        Task task;

        if (ancestor != -1) {
            task = new Task(task_name, description, start_date, end_date, specialCase,
                    false, false, ancestor, researcherProject);

            Task ancestorTask = taskRepository.findTaskById(ancestor);
            ancestorTask.setHaveDescendants(true);
            taskRepository.save(ancestorTask);

        } else {
            task = new Task(task_name, description, start_date, end_date, specialCase,
                    false, false, researcherProject);
        }

        taskRepository.save(task);

        return "saved";
    }

}
