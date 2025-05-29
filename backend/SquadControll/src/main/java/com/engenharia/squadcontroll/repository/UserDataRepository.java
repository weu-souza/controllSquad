package com.engenharia.squadcontroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.engenharia.squadcontroll.entity.UserData;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {
    // Busca o nome do UserData pelo CPF
    @Query("SELECT u.nome FROM UserData u WHERE u.cpf = :cpf")
    String findUserNameByCpf(String cpf);
}