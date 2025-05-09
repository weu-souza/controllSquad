package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.EmpresaDTO;
import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private String celular;
    private Date dataAdmissao;
    private String email;
    private String emailCurto;
    private String nomeGestor;
    private String numeroSap;
    private Double tarifa;
    private String unidadeDeNegocio;



    public Empresa() {
    }

    public Empresa(EmpresaDTO DTO) {
        this.id = DTO.getId();
        this.celular = DTO.getCelular();
        this.dataAdmissao = DTO.getDataAdmissao();
        this.email = DTO.getEmail();
        this.emailCurto = DTO.getEmailCurto();
        this.nomeGestor = DTO.getNomeGestor();
        this.numeroSap = DTO.getNumeroSap();
        this.tarifa = DTO.getTarifa();
        this.unidadeDeNegocio = DTO.getUnidadeDeNegocio();

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

    public void setTarifa(Double tarifa) {
        this.tarifa = tarifa;
    }

    public Double getTarifa() {
        return tarifa;
    }

    public Date getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Date dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
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

    public String getUnidadeDeNegocio() {
        return unidadeDeNegocio;
    }

    public void setUnidadeDeNegocio(String unidadeDeNegocio) {
        this.unidadeDeNegocio = unidadeDeNegocio;
    }


}
