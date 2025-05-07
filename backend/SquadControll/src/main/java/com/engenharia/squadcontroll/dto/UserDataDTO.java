package com.engenharia.squadcontroll.dto;


import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.entity.UserData;

import java.util.Date;

public class UserDataDTO {
    private long id;
    private Integer celular;
    private Integer cep;
    private String cidade;
    private Date aniversario;
    private String estado;
    private String logradouro;
    private String nome;
    private String orgaoEmissor;
    private Integer rg;
    private Integer telefone;
    private Employers numDocFk;

    public UserDataDTO() {

    }

    public UserDataDTO(long id, Integer celular, Integer cep, String cidade, Date aniversario, String estado, String logradouro, String nome, String orgaoEmissor, Integer rg, Integer telefone, Employers numDocFk) {
        this.id = id;
        this.celular = celular;
        this.cep = cep;
        this.cidade = cidade;
        this.aniversario = aniversario;
        this.estado = estado;
        this.logradouro = logradouro;
        this.nome = nome;
        this.orgaoEmissor = orgaoEmissor;
        this.rg = rg;
        this.telefone = telefone;
        this.numDocFk = numDocFk;
    }
    public UserDataDTO(UserData entity) {
        this.id = entity.getId();
        this.celular = entity.getCelular();
        this.cep = entity.getCep();
        this.cidade = entity.getCidade();
        this.aniversario = entity.getAniversario();
        this.estado = entity.getEstado();
        this.logradouro = entity.getLogradouro();
        this.nome = entity.getNome();
        this.orgaoEmissor = entity.getOrgaoEmissor();
        this.rg = entity.getRg();
        this.telefone = entity.getTelefone();
        this.numDocFk = entity.getNumDocFk();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getCelular() {
        return celular;
    }

    public void setCelular(Integer celular) {
        this.celular = celular;
    }

    public Integer getCep() {
        return cep;
    }

    public void setCep(Integer cep) {
        this.cep = cep;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public Date getAniversario() {
        return aniversario;
    }

    public void setAniversario(Date aniversario) {
        this.aniversario = aniversario;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getOrgaoEmissor() {
        return orgaoEmissor;
    }

    public void setOrgaoEmissor(String orgaoEmissor) {
        this.orgaoEmissor = orgaoEmissor;
    }

    public Integer getRg() {
        return rg;
    }

    public void setRg(Integer rg) {
        this.rg = rg;
    }

    public Integer getTelefone() {
        return telefone;
    }

    public void setTelefone(Integer telefone) {
        this.telefone = telefone;
    }

    public Employers getNumDocFk() {
        return numDocFk;
    }

    public void setNumDocFk(Employers numDocFk) {
        this.numDocFk = numDocFk;
    }
}
