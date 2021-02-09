package com.freeuni.demo.repository;

import com.freeuni.demo.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepo extends JpaRepository<Team, Integer> {
    Team getTeamByTeamName(String teamName);
    Team getTeamById(Integer id);
}
