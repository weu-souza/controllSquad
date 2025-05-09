package com.engenharia.squadcontroll.controller;

import com.engenharia.squadcontroll.dto.SquadDTO;
import com.engenharia.squadcontroll.service.SquadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/squads")
public class SquadController {

    @Autowired
    private SquadService squadService;

    @GetMapping
    public ResponseEntity<List<SquadDTO>> getAllSquads() {
        List<SquadDTO> squads = squadService.getAllSquads();
        return ResponseEntity.ok(squads);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SquadDTO> getSquadById(@PathVariable long id) {
        Optional<SquadDTO> squad = squadService.getSquadById(id);
        return squad.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SquadDTO> createSquad(@RequestBody SquadDTO squadDTO) {
        SquadDTO createdSquad = squadService.createSquad(squadDTO);
        return ResponseEntity.ok(createdSquad);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SquadDTO> updateSquad(@PathVariable long id, @RequestBody SquadDTO squadDTO) {
        Optional<SquadDTO> updatedSquad = squadService.updateSquad(id, squadDTO);
        return updatedSquad.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSquad(@PathVariable long id) {
        boolean deleted = squadService.deleteSquad(id);
        return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}