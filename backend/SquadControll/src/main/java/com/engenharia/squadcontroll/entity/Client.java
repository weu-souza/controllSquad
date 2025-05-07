package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.ClientDTO;
import jakarta.persistence.*;

@Entity
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    private Integer funcional;
    private String racf;
    @OneToOne
    @JoinColumn(name = "num_doc_FK", referencedColumnName = "id")
    private Employers numDocFk;

    public Client(long id, Integer funcional, String racf, Employers numDocFk) {
        this.id = id;
        this.funcional = funcional;
        this.racf = racf;
        this.numDocFk = numDocFk;
    }

    public Client() {
    }
    public Client(ClientDTO dto) {
        this.id = dto.getId();
        this.funcional = dto.getFuncional();
        this.racf = dto.getRacf();
        this.numDocFk = new Employers(dto.getNumDocFk());
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getFuncional() {
        return funcional;
    }

    public void setFuncional(Integer funcional) {
        this.funcional = funcional;
    }

    public String getRacf() {
        return racf;
    }

    public void setRacf(String racf) {
        this.racf = racf;
    }

    public Employers getNumDocFk() {
        return numDocFk;
    }

    public void setNumDocFk(Employers numDocFk) {
        this.numDocFk = numDocFk;
    }
}
