package com.engenharia.squadcontroll.repository;

import com.engenharia.squadcontroll.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AbscebceRepository extends JpaRepository<Client, String> {

    // Busca o nome do UserData pelo CPF
    @Query("SELECT u.nome FROM UserData u WHERE u.cpf = :cpf")
    String findUserNameByCpf( String cpf);
}
