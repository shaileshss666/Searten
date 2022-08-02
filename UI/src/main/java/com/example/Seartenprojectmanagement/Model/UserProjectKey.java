package com.example.Seartenprojectmanagement.Model;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class UserProjectKey implements Serializable {
    @Column(name = "user_id")
    private int userId;

    @Column(name = "project_id")
    private int projectId;

    public UserProjectKey() {
    }

    public UserProjectKey(int userId, int projectId) {
        this.userId = userId;
        this.projectId = projectId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProjectKey that = (UserProjectKey) o;
        return Objects.equals(userId, that.userId) && Objects.equals(projectId, that.projectId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, projectId);
    }
}
