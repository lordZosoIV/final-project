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

@Entity(name = "Player")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonComponent
public class Player {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String shirtNumber;

    private String name;

    private String position;

    private String nationality;

    private String appearances;

    private String cleanSheets;

    private String goals;

    private String assists;

    private String teamId;

    public Player(String shirtNumber, String name, String position, String nationality, String appearances,
                  String cleanSheets, String assists, String goals, String teamId) {
        this.shirtNumber = shirtNumber;
        this.name = name;
        this.position = position;
        this.nationality = nationality;
        this.appearances = appearances;
        this.cleanSheets = cleanSheets;
        this.assists = assists;
        this.goals = goals;
        this.teamId = teamId;
    }
}
