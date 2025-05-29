package com.engenharia.squadcontroll.controller;
import com.engenharia.squadcontroll.dto.AbscenceDTO;
import com.engenharia.squadcontroll.entity.Abscence;
import com.engenharia.squadcontroll.service.AbscenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/abscences")
public class AbscenceController {

    @Autowired
    private AbscenceService abscenceService;

    @GetMapping
    public List<Abscence> getAllAbscences() {
        return abscenceService.getAllAbscences();
    }

    @PostMapping
    public AbscenceDTO createAbscence(@RequestBody AbscenceDTO abscenceDTO) {
        try {
            return abscenceService.createAbscence(abscenceDTO);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao criar ausência: " + e.getMessage());
        }
    }
}

