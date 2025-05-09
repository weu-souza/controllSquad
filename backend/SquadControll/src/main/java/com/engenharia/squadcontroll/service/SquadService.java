package com.engenharia.squadcontroll.service;

import com.engenharia.squadcontroll.dto.SquadDTO;
import com.engenharia.squadcontroll.entity.Squad;
import com.engenharia.squadcontroll.repository.SquadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SquadService {

    @Autowired
    private SquadRepository squadRepository;

    public List<SquadDTO> getAllSquads() {
        return squadRepository.findAll()
                .stream()
                .map(SquadDTO::new)
                .collect(Collectors.toList());
    }

    public Optional<SquadDTO> getSquadById(long id) {
        return squadRepository.findById(id)
                .map(SquadDTO::new);
    }

    public SquadDTO createSquad(SquadDTO squadDTO) {
        Squad squad = new Squad(squadDTO);
        squad = squadRepository.save(squad);
        return new SquadDTO(squad);
    }

    public Optional<SquadDTO> updateSquad(long id, SquadDTO squadDTO) {
        return squadRepository.findById(id).map(existingSquad -> {
            existingSquad.setCelular(squadDTO.getCelular());
            existingSquad.setEmail(squadDTO.getEmail());
            existingSquad.setInicioContrato(squadDTO.getInicioContrato());
            existingSquad.setNomeGestor(squadDTO.getNomeGestor());
            existingSquad.setSquad(squadDTO.getSquad());
            existingSquad.setTerminoContrato(squadDTO.getTerminoContrato());
            existingSquad.setEXT(squadDTO.getEXT());
            squadRepository.save(existingSquad);
            return new SquadDTO(existingSquad);
        });
    }

    public boolean deleteSquad(long id) {
        if (squadRepository.existsById(id)) {
            squadRepository.deleteById(id);
            return true;
        }
        return false;
    }
}