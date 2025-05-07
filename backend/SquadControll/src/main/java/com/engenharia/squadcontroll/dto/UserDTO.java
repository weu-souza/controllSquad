package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.User;
import com.engenharia.squadcontroll.entity.UserData;

public class UserDTO {
    private long Id;
    private String Email;
    private String Password;
    private UserData UserDataFk;

    public UserDTO(long id, String email, String password, UserData userDataFk) {
        Id = id;
        Email = email;
        Password = password;
        UserDataFk = userDataFk;
    }

    public UserDTO() {

    }

    public UserDTO(User entity) {
        this.Id = entity.getId();
        this.Email = entity.getEmail();
        this.Password = entity.getPassword();
        this.UserDataFk = entity.getUserDataFk();
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public UserData getUserDataFk() {
        return UserDataFk;
    }

    public void setUserDataFk(UserData userDataFk) {
        UserDataFk = userDataFk;
    }
}
