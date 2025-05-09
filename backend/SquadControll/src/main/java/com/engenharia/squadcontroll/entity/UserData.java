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
    @Column(name = "nome", length = 50)
    private String nome;

    @Column(name = "aniversario")
    @Temporal(TemporalType.DATE)
    private Date dataAniversario;

    @Column(name = "telefone", length = 20)
    private String telefone;

    @Column(name = "celular", length = 20)
    private String celular;

    @Column(name = "estado", length = 50)
    private String estado;

    @Column(name = "cidade", length = 50)
    private String cidade;

    @Column(name = "cpf", length = 14)
    private String cpf;

    @Column(name = "rg", length = 20)
    private String rg;

    @Column(name = "orgao_emissor", length = 50)
    private String orgaoEmissor;

    @Column(name = "cep", length = 10)
    private String cep;

    @Column(name = "logradouro", length = 100)
    private String logradouro;

    @Column(name = "complemento", length = 100)
    private String complemento;

    @Column(name = "numero")
    private String numero;

    @OneToOne
    private User userFk;


    public UserData() {

    }

    public UserData(UserDataDTO DTO) {
        this.id = DTO.getId();
        this.celular = DTO.getCelular();
        this.cep = DTO.getCep();
        this.cidade = DTO.getCidade();
        this.dataAniversario = DTO.getDataAniversario();
        this.estado = DTO.getEstado();
        this.logradouro = DTO.getLogradouro();
        this.nome = DTO.getNome();
        this.orgaoEmissor = DTO.getOrgaoEmissor();
        this.rg = DTO.getRg();
        this.telefone = DTO.getTelefone();
        this.userFk = DTO.getUserFk();
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
