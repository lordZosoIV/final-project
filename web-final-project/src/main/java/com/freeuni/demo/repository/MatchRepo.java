package com.freeuni.demo.repository;

import com.freeuni.demo.entity.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MatchRepo extends JpaRepository<Match, Integer> {
    List<Match> getMatchByMatchDayOrderByFirstTeamId(Long matchDay);
    List<Match> getMatchByFirstTeamIdOrSecondTeamIdOrderByMatchDayDesc(Integer firstTeamId, Integer secondTeamId);
}
