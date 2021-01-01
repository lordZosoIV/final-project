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

    private Integer shirtNumber;

    private String name;


    private String position;

    private String nationality;

    private Integer appearances;

    private Integer effectiveness;

    private Integer teamId;

    public Player(int shirtNumber, String name, String position, String nationality, int appearances, int effectiveness, int teamId) {
        this.shirtNumber = shirtNumber;
        this.name = name;
        this.position = position;
        this.nationality = nationality;
        this.appearances = appearances;
        this.effectiveness = effectiveness;
        this.teamId = teamId;
    }
}
