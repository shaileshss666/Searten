package com.example.Seartenprojectmanagement.Repository;

import com.example.Seartenprojectmanagement.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findUserByEmail(String email);
    User findById(int user_id);
}
