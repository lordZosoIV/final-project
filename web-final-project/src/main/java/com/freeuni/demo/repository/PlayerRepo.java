package com.freeuni.demo.repository;


import com.freeuni.demo.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
    List<Player> getPlayersByTeamId(String teamId);
}
