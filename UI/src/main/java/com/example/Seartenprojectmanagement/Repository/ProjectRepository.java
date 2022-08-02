package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    Project findById(int project_id);
}
