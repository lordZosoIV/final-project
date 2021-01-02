package com.freeuni.demo.repository;

import com.freeuni.demo.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepo extends JpaRepository<Match, Integer> {
}
