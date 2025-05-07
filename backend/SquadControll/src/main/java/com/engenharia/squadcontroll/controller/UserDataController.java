package com.engenharia.squadcontroll.controller;

import com.engenharia.squadcontroll.entity.UserData;
import com.engenharia.squadcontroll.service.UserDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/userdata")
public class UserDataController {

    @Autowired
    private UserDataService userDataService;

    @GetMapping
    public List<UserData> getAllUserData() {
        return userDataService.getAllUserData();
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserData> getUserDataById(@PathVariable Long id) {
        return userDataService.getUserDataById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public UserData createUserData(@RequestBody UserData userData) {
        return userDataService.createUserData(userData);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserData> updateUserData(@PathVariable Long id, @RequestBody UserData userData) {
        try {
            return ResponseEntity.ok(userDataService.updateUserData(id, userData));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserData(@PathVariable Long id) {
        try {
            userDataService.deleteUserData(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
