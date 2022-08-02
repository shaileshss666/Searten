package com.example.Seartenprojectmanagement.Controller;

import com.example.Seartenprojectmanagement.Model.Req.LoginReq;
import com.example.Seartenprojectmanagement.Model.User;
import com.example.Seartenprojectmanagement.Repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.http.HttpSession;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginReq loginReq, HttpSession session) {
        String email = loginReq.email;
        String password = loginReq.password;
        User user = userRepository.findUserByEmail(email);

        if(user == null) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "User not exists.");
        }

        if(!password.equals(password)) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Password error.");
        }

        session.setAttribute("uid", user.getId());
        return user.getUser_name();
    }
}
