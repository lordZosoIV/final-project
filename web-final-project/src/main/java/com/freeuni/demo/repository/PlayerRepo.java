package com.freeuni.demo.repository;


import com.freeuni.demo.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
    List<Player> getPlayersByTeamId(String teamId);
    List<Player> getPlayersByTeamIdOrderByGoalsDesc(String teamId);
    List<Player> getPlayerByTeamIdOrderByGoalsDesc(String teamId);

    @Query(value = "SELECT p FROM Player p " +
            "WHERE " +
            "length(:pattern) > 2 and " +
            "(LOWER(p.name) LIKE CONCAT('%',LOWER(:pattern),'%')) ")

    List<Player> searchByPattern(@Param("pattern") String pattern);

}
