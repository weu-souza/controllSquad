package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.entity.Empresa;
import jakarta.persistence.*;

import java.util.Date;

public class EmpresaDTO {

    private long id;
    private String celular;
    private Date dataAdmissao;
    private String email;
    private String emailCurto;
    private String nomeGestor;
    private String numeroSap;
    private Double tarifa;
    private String unidadeDeNegocio;


    public EmpresaDTO() {
    }

    public EmpresaDTO(Empresa entity) {
        this.id = entity.getId();
        this.celular = entity.getCelular();
        this.dataAdmissao = entity.getDataAdmissao();
        this.email = entity.getEmail();
        this.emailCurto = entity.getEmailCurto();
        this.nomeGestor = entity.getNomeGestor();
        this.numeroSap = entity.getNumeroSap();
        this.tarifa = entity.getTarifa();
        this.unidadeDeNegocio = entity.getUnidadeDeNegocio();

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

    public String getEmailCurto() {
        return emailCurto;
    }

    public void setEmailCurto(String emailCurto) {
        this.emailCurto = emailCurto;
    }

    public String getNomeGestor() {
        return nomeGestor;
    }

    public void setNomeGestor(String nomeGestor) {
        this.nomeGestor = nomeGestor;
    }

    public String getNumeroSap() {
        return numeroSap;
    }

    public void setNumeroSap(String numeroSap) {
        this.numeroSap = numeroSap;
    }

    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }

    public Double getTarifa() {
        return tarifa;
    }

    public void setTarifa(Double tarifa) {
        this.tarifa = tarifa;
    }

    public String getUnidadeDeNegocio() {
        return unidadeDeNegocio;
    }

    public void setUnidadeDeNegocio(String unidadeDeNegocio) {
        this.unidadeDeNegocio = unidadeDeNegocio;
    }

}
