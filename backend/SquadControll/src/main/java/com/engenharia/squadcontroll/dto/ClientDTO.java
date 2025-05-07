package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Client;

public class ClientDTO {
    private long id;
    private Integer funcional;
    private String racf;
    private long numDocFk;

    public ClientDTO() {
    }
    public ClientDTO(Client entity) {
        this.id = entity.getId();
        this.funcional = entity.getFuncional();
        this.racf = entity.getRacf();
        this.numDocFk = entity.getNumDocFk().getId();
    }

    public ClientDTO(long id, Integer funcional, String racf, long numDocFk) {
        this.id = id;
        this.funcional = funcional;
        this.racf = racf;
        this.numDocFk = numDocFk;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getFuncional() {
        return funcional;
    }

    public void setFuncional(Integer funcional) {
        this.funcional = funcional;
    }

    public String getRacf() {
        return racf;
    }

    public void setRacf(String racf) {
        this.racf = racf;
    }

    public long getNumDocFk() {
        return numDocFk;
    }

    public void setNumDocFk(long numDocFk) {
        this.numDocFk = numDocFk;
    }
}
