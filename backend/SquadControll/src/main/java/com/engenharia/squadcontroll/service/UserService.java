package com.engenharia.squadcontroll.service;

import com.engenharia.squadcontroll.entity.User;
import com.engenharia.squadcontroll.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User signIn(User user) {
        User existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(user.getPassword())) {
            return existingUser;
        }
        throw new RuntimeException("Credenciais inválidas");
    }

    public User signUp(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("Usuário já existe");
        }
        return userRepository.save(user);
    }

}
