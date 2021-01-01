package com.freeuni.demo.repository;


import com.freeuni.demo.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepo extends JpaRepository<Player, Integer> {
}
