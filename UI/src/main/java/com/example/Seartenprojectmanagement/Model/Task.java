package com.example.Seartenprojectmanagement.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long id;

    private String task_name;
    private String description;
    private Date start_date;
    private Date end_date;
    private Boolean completed;
    private String specialCase;
    private Boolean haveDescendants;
    private Long ancestor_id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name="user_id", referencedColumnName="user_id"),
            @JoinColumn(name="project_id", referencedColumnName="project_id")
    })
    @JsonIgnore
    private ResearcherProject researcherProject;


    public Task() {
    }

    public Task(String task_name, String description, Date start_date, Date end_date, String specialCase,
                Boolean completed, Boolean haveDescendants, ResearcherProject researcherProject) {
        this.task_name = task_name;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.completed = completed;
        this.specialCase = specialCase;
        this.haveDescendants = haveDescendants;
        this.researcherProject = researcherProject;
    }

    public Task(String task_name, String description, Date start_date, Date end_date, String specialCase,
                Boolean completed, Boolean haveDescendants, Long ancestor_id, ResearcherProject researcherProject) {
        this.task_name = task_name;
        this.description = description;
        this.start_date = start_date;
        this.end_date = end_date;
        this.completed = completed;
        this.specialCase = specialCase;
        this.haveDescendants = haveDescendants;
        this.ancestor_id = ancestor_id;
        this.researcherProject = researcherProject;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTask_name() {
        return task_name;
    }

    public void setTask_name(String task_name) {
        this.task_name = task_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getStart_date() {
        return start_date;
    }

    public void setStart_date(Date start_date) {
        this.start_date = start_date;
    }

    public Date getEnd_date() {
        return end_date;
    }

    public void setEnd_date(Date end_date) {
        this.end_date = end_date;
    }

    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }

    public String getSpecialCase() {
        return specialCase;
    }

    public void setSpecialCase(String specialCase) {
        this.specialCase = specialCase;
    }

    public Boolean getHaveDescendants() {
        return haveDescendants;
    }

    public void setHaveDescendants(Boolean haveDescendants) {
        this.haveDescendants = haveDescendants;
    }

    public Long getAncestor_id() {
        return ancestor_id;
    }

    public void setAncestor_id(Long ancestor_id) {
        this.ancestor_id = ancestor_id;
    }

}
