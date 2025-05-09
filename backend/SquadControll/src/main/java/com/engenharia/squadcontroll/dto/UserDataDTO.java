package com.engenharia.squadcontroll.dto;


import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.entity.User;
import com.engenharia.squadcontroll.entity.UserData;
import jakarta.persistence.*;

import java.util.Date;

public class UserDataDTO {
    private long id;
    private String nome;
    private Date dataAniversario;
    private String telefone;
    private String celular;
    private String estado;
    private String cidade;
    private String cpf;
    private String rg;
    private String orgaoEmissor;
    private String cep;
    private String logradouro;
    private String complemento;
    private String numero;

    private User userFk;

    public UserDataDTO() {

    }


    public UserDataDTO(UserData entity) {
        this.id = entity.getId();
        this.celular = entity.getCelular();
        this.cep = entity.getCep();
        this.cidade = entity.getCidade();
        this.dataAniversario = entity.getDataAniversario();
        this.estado = entity.getEstado();
        this.logradouro = entity.getLogradouro();
        this.nome = entity.getNome();
        this.orgaoEmissor = entity.getOrgaoEmissor();
        this.rg = entity.getRg();
        this.telefone = entity.getTelefone();

        this.userFk = entity.getUserFk();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Date getDataAniversario() {
        return dataAniversario;
    }

    public void setDataAniversario(Date dataAniversario) {
        this.dataAniversario = dataAniversario;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getRg() {
        return rg;
    }

    public void setRg(String rg) {
        this.rg = rg;
    }

    public String getOrgaoEmissor() {
        return orgaoEmissor;
    }

    public void setOrgaoEmissor(String orgaoEmissor) {
        this.orgaoEmissor = orgaoEmissor;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getComplemento() {
        return complemento;
    }

    public void setComplemento(String complemento) {
        this.complemento = complemento;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public User getUserFk() {
        return userFk;
    }

    public void setUserFk(User userFk) {
        this.userFk = userFk;
    }
}
