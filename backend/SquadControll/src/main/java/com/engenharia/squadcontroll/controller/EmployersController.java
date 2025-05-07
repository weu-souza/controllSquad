package com.engenharia.squadcontroll.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/employers")
public class EmployersController {

    private List<String> employers = new ArrayList<>();

    @GetMapping
    public List<String> getAllEmployers() {
        return employers;
    }

    @GetMapping("/{id}")
    public String getEmployerById(@PathVariable int id) {
        if (id >= 0 && id < employers.size()) {
            return employers.get(id);
        }
        throw new IllegalArgumentException("Employer not found");
    }

    @PostMapping
    public String addEmployer(@RequestBody String employer) {
        employers.add(employer);
        return "Employer added successfully";
    }

    @PutMapping("/{id}")
    public String updateEmployer(@PathVariable int id, @RequestBody String employer) {
        if (id >= 0 && id < employers.size()) {
            employers.set(id, employer);
            return "Employer updated successfully";
        }
        throw new IllegalArgumentException("Employer not found");
    }

    @DeleteMapping("/{id}")
    public String deleteEmployer(@PathVariable int id) {
        if (id >= 0 && id < employers.size()) {
            employers.remove(id);
            return "Employer deleted successfully";
        }
        throw new IllegalArgumentException("Employer not found");
    }
}