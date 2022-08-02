package com.example.Seartenprojectmanagement.Model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "folder_file")
public class FoldeFile implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String file_name;

    
    private String file_url;
}
