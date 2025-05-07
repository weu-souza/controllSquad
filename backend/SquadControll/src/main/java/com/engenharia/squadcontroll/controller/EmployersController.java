package com.engenharia.squadcontroll.controller;

import com.engenharia.squadcontroll.entity.Employers;
import com.engenharia.squadcontroll.service.EmployersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employers")
public class EmployersController {

    @Autowired
    private EmployersService employersService;

    @GetMapping
    public List<Employers> getAllEmployers() {
        return employersService.getAllEmployers();
    }

    @GetMapping("/{id}")
    public Employers getEmployerById(@PathVariable Long id) {
        return employersService.getEmployerById(id)
                .orElseThrow(() -> new IllegalArgumentException("Employer not found"));
    }

    @PostMapping
    public Employers addEmployer(@RequestBody Employers employer) {
        return employersService.addEmployer(employer);
    }

    @PutMapping("/{id}")
    public Employers updateEmployer(@PathVariable Long id, @RequestBody Employers employer) {
        return employersService.updateEmployer(id, employer);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployer(@PathVariable Long id) {
        employersService.deleteEmployer(id);
    }
}