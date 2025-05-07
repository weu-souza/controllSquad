package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.EmpresaDTO;
import jakarta.persistence.*;

@Entity
public class Empresa {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private Integer celular;
    private Integer dataAdmissao;
    private String email;
    private String emailCurto;
    private String nomeGestor;
    private int numeroSap;
    private int tarifa;
    private String unidadeDeNegocio;
    @OneToOne
    @JoinColumn(name = "num_doc_FK", referencedColumnName = "id")
    private Employers numDocFk;

    public Empresa(long id, Integer celular, Integer dataAdmissao, String email, String emailCurto, String nomeGestor, int numeroSap, int tarifa, String unidadeDeNegocio, Employers numDocFk) {
        this.id = id;
        this.celular = celular;
        this.dataAdmissao = dataAdmissao;
        this.email = email;
        this.emailCurto = emailCurto;
        this.nomeGestor = nomeGestor;
        this.numeroSap = numeroSap;
        this.tarifa = tarifa;
        this.unidadeDeNegocio = unidadeDeNegocio;
        this.numDocFk = numDocFk;
    }

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
        this.numDocFk = DTO.getNumDocFk();
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

    public Integer getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(Integer dataAdmissao) {
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

    public int getNumeroSap() {
        return numeroSap;
    }

    public void setNumeroSap(int numeroSap) {
        this.numeroSap = numeroSap;
    }

    public int getTarifa() {
        return tarifa;
    }

    public void setTarifa(int tarifa) {
        this.tarifa = tarifa;
    }

    public String getUnidadeDeNegocio() {
        return unidadeDeNegocio;
    }

    public void setUnidadeDeNegocio(String unidadeDeNegocio) {
        this.unidadeDeNegocio = unidadeDeNegocio;
    }

    public Employers getNumDocFk() {
        return numDocFk;
    }

    public void setNumDocFk(Employers numDocFk) {
        this.numDocFk = numDocFk;
    }
}
