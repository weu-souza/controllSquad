package com.engenharia.squadcontroll.repository;

import com.engenharia.squadcontroll.entity.Abscence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbscenceRepository extends JpaRepository<Abscence, String> {


}
