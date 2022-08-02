package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.Project;
import com.example.Seartenprojectmanagement.Model.User;
import com.example.Seartenprojectmanagement.Model.UserProject;
import com.example.Seartenprojectmanagement.Model.UserProjectKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserProjectRepository extends JpaRepository<UserProject, UserProjectKey> {
}
