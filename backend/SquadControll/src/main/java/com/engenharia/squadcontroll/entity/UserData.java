package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.UserDataDTO;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "tb_UserData")
public class UserData {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    @Column(name = "celular")
    private Integer celular;

    @Column(name = "cep")
    private Integer cep;

    @Column(name = "cidade", length = 50)
    private String cidade;

    @Column(name = "aniversario")
    @Temporal(TemporalType.DATE)
    private Date aniversario;

    @Column(name = "estado", length = 50)
    private String estado;

    @Column(name = "logradouro", length = 50)
    private String logradouro;

    @Column(name = "nome", length = 50)
    private String nome;

    @Column(name = "orgao_emissor", length = 50)
    private String orgaoEmissor;

    @Column(name = "rg")
    private Integer rg;

    @Column(name = "telefone")
    private Integer telefone;

    @OneToOne
    @JoinColumn(name = "num_doc_FK", referencedColumnName = "id")
    private Employers numDocFk;
    @OneToOne
    private User userFk;

    public UserData(long id, Integer celular, Integer cep, String cidade, Date aniversario, String estado, String logradouro, String nome, String orgaoEmissor, Integer rg, Integer telefone, Employers numDocFk,User userFk) {
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
        this.userFk = userFk;
    }

    public UserData() {

    }

    public UserData(UserDataDTO DTO) {
        this.id = DTO.getId();
        this.celular = DTO.getCelular();
        this.cep = DTO.getCep();
        this.cidade = DTO.getCidade();
        this.aniversario = DTO.getAniversario();
        this.estado = DTO.getEstado();
        this.logradouro = DTO.getLogradouro();
        this.nome = DTO.getNome();
        this.orgaoEmissor = DTO.getOrgaoEmissor();
        this.rg = DTO.getRg();
        this.telefone = DTO.getTelefone();
        this.numDocFk = DTO.getNumDocFk();
        this.userFk = DTO.getUserFk();
    }

    public User getUserFk() {
        return userFk;
    }

    public void setUserFk(User userFk) {
        this.userFk = userFk;
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
