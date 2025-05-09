package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.EmployersDTO;
import jakarta.persistence.*;

@Entity
public class Employers {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="dados_pessoais_id")
    private UserData dadosPessoais;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="empresa_id")
    private Empresa empresa;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="cliente_id")
    private Client cliente;

    public Employers(EmployersDTO dto) {
        this.dadosPessoais = dto.getDadosPessoais();
        this.empresa = dto.getEmpresa();
        this.cliente = dto.getCliente();
    }


    public Employers() {
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
