package com.engenharia.squadcontroll.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.engenharia.squadcontroll.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
