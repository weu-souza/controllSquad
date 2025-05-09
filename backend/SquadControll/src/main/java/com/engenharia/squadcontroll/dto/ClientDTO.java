package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Client;

public class ClientDTO {
    private long id;
    private String funcional;
    private String racf;
    private String squad;
    private String email;

    public ClientDTO() {
    }

    public ClientDTO(Client entity) {
        this.id = entity.getId();
        this.funcional = entity.getFuncional();
        this.racf = entity.getRacf();
        this.squad = entity.getSquad();
        this.email = entity.getEmail();
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

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRacf() {
        return racf;
    }

    public void setRacf(String racf) {
        this.racf = racf;
    }

    public String getFuncional() {
        return funcional;
    }
}
