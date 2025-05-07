package com.engenharia.squadcontroll.repository;

import com.engenharia.squadcontroll.entity.Employers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployerRepository extends JpaRepository<Employers, Long> {
}