package com.example.Seartenprojectmanagement.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "researcher_project")
public class ResearcherProject {
    @EmbeddedId
    private UserProjectKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("project_id")
    @JoinColumn(name = "project_id")
    @JsonIgnore
    private Project project;

    @OneToMany(mappedBy = "researcherProject", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Task> tasks;

    private Date joinDate;
    private String role;

    public ResearcherProject() {
    }

    public ResearcherProject(UserProjectKey id, User user, Project project, Date joinDate, String role) {
        this.id = id;
        this.user = user;
        this.project = project;
        this.joinDate = joinDate;
        this.role = role;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ResearcherProject that = (ResearcherProject) o;
        return Objects.equals(user, that.user) && Objects.equals(project, that.project);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, project);
    }

    public void setId(UserProjectKey id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
