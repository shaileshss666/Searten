package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.Project;
import com.example.Seartenprojectmanagement.Model.Task;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findTaskById(Long task_id);
}
