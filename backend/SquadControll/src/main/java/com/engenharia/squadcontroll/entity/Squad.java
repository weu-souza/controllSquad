package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.SquadDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Squad {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String celular;
    private String email;
    private Date inicioContrato;
    private String nomeGestor;
    private String squad;
    private Date terminoContrato;

    public Squad(long id, String celular, String email, Date inicioContrato, String nomeGestor, String squad, Date terminoContrato) {
        this.id = id;
        this.celular = celular;
        this.email = email;
        this.inicioContrato = inicioContrato;
        this.nomeGestor = nomeGestor;
        this.squad = squad;
        this.terminoContrato = terminoContrato;
    }

    public Squad() {
    }

    public Squad(SquadDTO dto) {
        this.id = dto.getId();
        this.celular = dto.getCelular();
        this.email = dto.getEmail();
        this.inicioContrato = dto.getInicioContrato();
        this.nomeGestor = dto.getNomeGestor();
        this.squad = dto.getSquad();
        this.terminoContrato = dto.getTerminoContrato();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getInicioContrato() {
        return inicioContrato;
    }

    public void setInicioContrato(Date inicioContrato) {
        this.inicioContrato = inicioContrato;
    }

    public String getNomeGestor() {
        return nomeGestor;
    }

    public void setNomeGestor(String nomeGestor) {
        this.nomeGestor = nomeGestor;
    }

    public String getSquad() {
        return squad;
    }

    public void setSquad(String squad) {
        this.squad = squad;
    }

    public Date getTerminoContrato() {
        return terminoContrato;
    }

    public void setTerminoContrato(Date terminoContrato) {
        this.terminoContrato = terminoContrato;
    }
}
