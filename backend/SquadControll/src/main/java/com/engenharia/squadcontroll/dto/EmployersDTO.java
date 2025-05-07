package com.engenharia.squadcontroll.dto;

import com.engenharia.squadcontroll.entity.Employers;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class EmployersDTO {

    private long id;

    public EmployersDTO(long id) {
        this.id = id;
    }
    public EmployersDTO(Employers entity) {
        this.id = entity.getId();
    }

    public EmployersDTO() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
