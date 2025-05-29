package com.engenharia.squadcontroll.service;

import com.engenharia.squadcontroll.dto.AbscenceDTO;
import com.engenharia.squadcontroll.entity.Abscence;
import com.engenharia.squadcontroll.entity.UserData;
import com.engenharia.squadcontroll.repository.AbscenceRepository;
import com.engenharia.squadcontroll.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AbscenceService {

    @Autowired
    private AbscenceRepository abscenceRepository;

    @Autowired
    private UserDataRepository userDataRepository;

    public List<Abscence> getAllAbscences() {
        return abscenceRepository.findAll();
    }

    public AbscenceDTO createAbscence(AbscenceDTO dto) {
        String userData = userDataRepository.findUserNameByCpf(dto.getCpf());
        if (userData == null) {
            throw new RuntimeException("Usuário não encontrado com cpf: " + dto.getCpf());
        }
        var abscence = new Abscence();
        abscence.setStart(dto.getStart());
        abscence.setEnd(dto.getEnd());
        abscence.setTitle(userData);
        abscence = abscenceRepository.save(abscence);
        return new AbscenceDTO(abscence);
    }
}

