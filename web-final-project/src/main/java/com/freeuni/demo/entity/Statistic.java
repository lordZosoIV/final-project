package com.freeuni.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.jackson.JsonComponent;

import java.util.ArrayList;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonComponent
public class Statistic {
    private String firstTeamName;
    private String secondTeamName;
    private int score1;
    private int score2;

    private double firstTeamBallPosition;
    private double secondTeamBallPosition;

    private int firstTeamShots;
    private int secondTeamShots;

    private double firstTeamShotsPercentage;
    private double secondTeamShotsPercentage;


    private int firstTeamShotsOnTarget;
    private int secondTeamShotsOnTarget;

    private double firstTeamShotsOnTargetPercentage;
    private double secondTeamShotsOnTargetPercentage;


    private int firstTeamAttack;
    private int secondTeamAttack;

    private double firstTeamAttackPercentage;
    private double secondTeamAttackPercentage;

    private int firstTeamOffSides;
    private int secondTeamOffSides;

    private double firstTeamOffSidesPercentage;
    private double secondTeamOffSidesPercentage;

    private int firstTeamSaves;
    private int secondTeamSaves;

    private double firstTeamSavesPercentage;
    private double secondTeamSavesPercentage;

    private ArrayList<Player> firstTeamGoals;
    private ArrayList<Player> secondTeamGoals;

    private Player mvp;

}
