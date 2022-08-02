package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.FoldeFile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FoldeFileRepository extends JpaRepository<FoldeFile, Long> {

    List<FoldeFile> findAll();
}
