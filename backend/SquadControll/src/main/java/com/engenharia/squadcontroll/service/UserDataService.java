package com.engenharia.squadcontroll.service;

import com.engenharia.squadcontroll.entity.UserData;
import com.engenharia.squadcontroll.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserDataService {

    @Autowired
    private UserDataRepository userDataRepository;

    public List<UserData> getAllUserData() {
        return userDataRepository.findAll();
    }

    public Optional<UserData> getUserDataById(Long id) {
        return userDataRepository.findById(id);
    }

    public UserData createUserData(UserData userData) {
        return userDataRepository.save(userData);
    }

    public UserData updateUserData(Long id, UserData userData) {
        if (userDataRepository.existsById(id)) {
            userData.setId(id);
            return userDataRepository.save(userData);
        }
        throw new RuntimeException("UserData not found with id: " + id);
    }

    public void deleteUserData(Long id) {
        if (userDataRepository.existsById(id)) {
            userDataRepository.deleteById(id);
        } else {
            throw new RuntimeException("UserData not found with id: " + id);
        }
    }
}
