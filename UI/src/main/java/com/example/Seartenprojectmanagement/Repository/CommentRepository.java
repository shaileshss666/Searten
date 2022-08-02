package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByProjectId(int project_id);
}
