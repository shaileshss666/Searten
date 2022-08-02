package com.example.Seartenprojectmanagement.Model;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user_project")
public class UserProject {
    @EmbeddedId
    private UserProjectKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @MapsId("project_id")
    @JoinColumn(name = "project_id")
    private Project project;

    private int is_researcher;
    private int is_director;
    private int is_approver;
    public UserProject() {
    }

    public UserProject(UserProjectKey id, User user, Project project, int is_researcher, int is_director, int is_approver) {
        this.id = id;
        this.user = user;
        this.project = project;
        this.is_researcher = is_researcher;
        this.is_director = is_director;
        this.is_approver = is_approver;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProject that = (UserProject) o;
        return Objects.equals(user, that.user) && Objects.equals(project, that.project);
    }

    @Override
    public int hashCode() {
        return Objects.hash(user, project);
    }

    public UserProjectKey getId() {
        return id;
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

    public int getIs_researcher() {
        return is_researcher;
    }

    public void setIs_researcher(int is_researcher) {
        this.is_researcher = is_researcher;
    }

    public int getIs_director() {
        return is_director;
    }

    public void setIs_director(int is_director) {
        this.is_director = is_director;
    }

    public int getIs_approver() {
        return is_approver;
    }

    public void setIs_approver(int is_approver) {
        this.is_approver = is_approver;
    }
}
