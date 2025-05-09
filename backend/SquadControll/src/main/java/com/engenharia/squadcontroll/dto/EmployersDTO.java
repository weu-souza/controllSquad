package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Client;
import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.entity.Empresa;
import com.engenharia.squadcontroll.entity.UserData;
import jakarta.persistence.*;

public class EmployersDTO {

    private long id;

    private UserData dadosPessoais;
    private Empresa empresa;
    private Client cliente;


    public EmployersDTO(Employers entity) {
        this.id = entity.getId();
        this.dadosPessoais = entity.getDadosPessoais();
        this.empresa = entity.getEmpresa();
        this.cliente = entity.getCliente();
    }

    public EmployersDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public UserData getDadosPessoais() {
        return dadosPessoais;
    }

    public void setDadosPessoais(UserData dadosPessoais) {
        this.dadosPessoais = dadosPessoais;
    }

    public Empresa getEmpresa() {
        return empresa;
    }

    public void setEmpresa(Empresa empresa) {
        this.empresa = empresa;
    }

    public Client getCliente() {
        return cliente;
    }

    public void setCliente(Client cliente) {
        this.cliente = cliente;
    }
}
