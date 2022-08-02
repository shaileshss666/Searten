package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.Period;
import java.util.List;

public interface ResearcherProjectRepository extends JpaRepository<ResearcherProject, UserProjectKey> {
    @Query("SELECT r FROM ResearcherProject r WHERE r.project.id = ?1")
    List<ResearcherProject> findByProjectId(int project_id);

    @Query("SELECT r.tasks FROM ResearcherProject r WHERE r.project.id = ?1 AND r.user.id = ?2")
    List<Task> findTaskByProjectIdAndUserId(int project_id, int user_id);

    ResearcherProject findByProjectIdAndUserId(int project_id, int user_id);
}
