package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.ClientDTO;
import jakarta.persistence.*;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String funcional;
    private String racf;
    private  String squad;
    private String email;




    public Client() {
    }
    public Client(ClientDTO dto) {
        this.id = dto.getId();
        this.funcional = dto.getFuncional();
        this.racf = dto.getRacf();
        this.squad = dto.getSquad();
        this.email = dto.getEmail();

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFuncional() {
        return funcional;
    }

    public void setFuncional(String funcional) {
        this.funcional = funcional;
    }

    public String getSquad() {
        return squad;
    }

    public void setSquad(String squad) {
        this.squad = squad;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRacf() {
        return racf;
    }

    public void setRacf(String racf) {
        this.racf = racf;
    }
}
