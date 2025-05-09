package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.User;
import com.engenharia.squadcontroll.entity.UserData;

public class UserDTO {
    private long Id;
    private String email;
    private String name;
    private String password;

    public UserDTO(long id, String email, String password, UserData userDataFk, String name) {
        Id = id;
        this.email = email;
        this.password = password;
        this.name = name;
    }

    public UserDTO() {

    }

    public UserDTO(User entity) {
        this.Id = entity.getId();
        this.email = entity.getEmail();
        this.password = entity.getPassword();
        this.name = entity.getName();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
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
