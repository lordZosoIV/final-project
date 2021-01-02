package com.freeuni.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.jackson.JsonComponent;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "matchTable")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonComponent
public class Match {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private Long matchDay;

    private Long firstTeamScore;

    private Long secondTeamScore;

    private Integer firstTeamId;

    private Integer secondTeamId;

    public Match(Long matchDay, Long firstTeamScore, Long secondTeamScore, Integer firstTeamId, Integer secondTeamId) {
        this.matchDay = matchDay;
        this.firstTeamScore = firstTeamScore;
        this.secondTeamScore = secondTeamScore;
        this.firstTeamId = firstTeamId;
        this.secondTeamId = secondTeamId;
    }
}
