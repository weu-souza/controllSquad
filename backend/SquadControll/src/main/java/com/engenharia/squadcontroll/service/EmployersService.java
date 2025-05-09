package com.engenharia.squadcontroll.service;

import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployersService {

    @Autowired
    private EmployerRepository employerRepository;

    public List<Employers> getAllEmployers() {
        return employerRepository.findAll();
    }

    public Optional<Employers> getEmployerById(Long id) {
        return employerRepository.findById(id);
    }

    public Employers addEmployer(Employers employer) {

        return employerRepository.save(employer);
    }

    public Employers updateEmployer(Long id, Employers employer) {
        if (employerRepository.existsById(id)) {
            employer.setId(id);
            return employerRepository.save(employer);
        }
        throw new IllegalArgumentException("Employer not found");
    }

    public void deleteEmployer(Long id) {
        if (employerRepository.existsById(id)) {
            employerRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Employer not found");
        }
    }
}