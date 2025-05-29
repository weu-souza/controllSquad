package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Abscence;
import com.engenharia.squadcontroll.entity.UserData;

import java.util.Date;

public class AbscenceDTO {
    private long id;
    private Date start;
    private Date end;
    private String title;
    private String cpf;


    public AbscenceDTO() {
    }

    public AbscenceDTO(Abscence entity) {
        this.id = entity.getId();
        this.start = entity.getStart();
        this.end = entity.getEnd();
        this.title = entity.getTitle();
        this.cpf = entity.getCpf();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCpf() {
        return cpf;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setDate(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
