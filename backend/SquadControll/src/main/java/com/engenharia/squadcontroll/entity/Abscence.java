package com.engenharia.squadcontroll.entity;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tb_Abscence")
public class Abscence {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "date")
    private Date start;
    @Column(name = "end_date")
    private Date end;
    private String title;
    @Column(name = "cpf", length = 14, unique = true)
    private String cpf;

    public Abscence(Abscence dto) {
        this.id = dto.getId();
        this.start = dto.getStart();
        this.end = dto.getEnd();
        this.title = dto.getTitle();
        this.cpf = dto.getCpf();
    }
    public Abscence() {
    }

    public long getId() {
        return id;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
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
