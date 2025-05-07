package com.engenharia.squadcontroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.engenharia.squadcontroll.entity.UserData;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {

}