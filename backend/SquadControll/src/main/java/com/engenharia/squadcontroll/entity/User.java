package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.UserDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "tb_User")

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String Email;
    private String Password;
    @OneToOne
    @JoinColumn(name = "UserData_Fk", referencedColumnName = "id")
    private UserData UserDataFk;

    public User(long id, String email, String password, UserData userDataFk) {
        this.id = id;
        Email = email;
        Password = password;
        UserDataFk = userDataFk;
    }

    public User() {

    }

    public User(UserDTO DTO) {
        this.id= DTO.getId();
        this.Email = DTO.getEmail();
        this.Password = DTO.getPassword();
        this.UserDataFk = DTO.getUserDataFk();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
