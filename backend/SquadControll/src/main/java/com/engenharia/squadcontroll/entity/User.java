package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.UserDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_User")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String email;
    private String password;
    private String name;

    public User(long id, String email, String password, String name) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public User() {

    }

    public User(UserDTO DTO) {
        this.id = DTO.getId();
        this.email = DTO.getEmail();
        this.password = DTO.getPassword();
        this.name = DTO.getName();
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
