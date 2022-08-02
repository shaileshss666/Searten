package com.example.Seartenprojectmanagement.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Blob;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "project_id")
    private int id;
    private String title;
    private String division_name;
    private String group_name;
    private String description;
    private String short_description;
    private Date start_date;
    private Date end_date;
    private int funded;
    private int actual_budget;
    private int estimated_budget;
    private int visible;
    private String outcomes;
    private Long creator_user_id;
    private Blob cover_image;


    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<UserProject> userProjects;

    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<ResearcherProject> researcherProjects;


    /*
    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<GrantApplication> grantApplications;


    @OneToMany(mappedBy = "project", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<ExpenseRecord> expenseRecords;*/


    public Project() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDivision_name() {
        return division_name;
    }

    public void setDivision_name(String division_name) {
        this.division_name = division_name;
    }

    public String getGroup_name() {
        return group_name;
    }

    public void setGroup_name(String group_name) {
        this.group_name = group_name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getShort_description() {
        return short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
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

    public int getFunded() {
        return funded;
    }

    public void setFunded(int funded) {
        this.funded = funded;
    }

    public int getActual_budget() {
        return actual_budget;
    }

    public void setActual_budget(int actual_budget) {
        this.actual_budget = actual_budget;
    }

    public int getEstimated_budget() {
        return estimated_budget;
    }

    public void setEstimated_budget(int estimated_budget) {
        this.estimated_budget = estimated_budget;
    }

    public int getVisible() {
        return visible;
    }

    public void setVisible(int visible) {
        this.visible = visible;
    }

    public String getOutcomes() {
        return outcomes;
    }

    public void setOutcomes(String outcomes) {
        this.outcomes = outcomes;
    }

    public Long getCreator_user_id() {
        return creator_user_id;
    }

    public void setCreator_user_id(Long creator_user_id) {
        this.creator_user_id = creator_user_id;
    }
}
