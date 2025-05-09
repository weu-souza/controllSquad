package com.engenharia.squadcontroll.controller;

import com.engenharia.squadcontroll.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.engenharia.squadcontroll.entity.User;
import com.engenharia.squadcontroll.repository.UserRepository;


@RestController
@RequestMapping("/api/auth")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signin")
    public ResponseEntity<User> signIn(@RequestBody User user) {
        try {
            User newUser = userService.signIn(user);
            return ResponseEntity.ok(newUser);
        } catch (RuntimeException e) {

            return ResponseEntity.badRequest().header("Error-Message", e.getMessage()).body(null);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<User> signUp(@RequestBody User user) {
        try {
            User newUser = userService.signUp(user);
            return ResponseEntity.ok(newUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().header("Error-Message", e.getMessage()).body(null);
        }
    }


}
