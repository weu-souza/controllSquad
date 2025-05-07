package com.engenharia.squadcontroll.entity;

import com.engenharia.squadcontroll.dto.EmployersDTO;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employers {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;

    public Employers(long id) {
        this.id = id;
    }

    public Employers() {
    }

    public Employers(EmployersDTO entity) {
        this.id = entity.getId();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
