package com.freeuni.demo.entity;

import lombok.*;
import org.springframework.boot.jackson.JsonComponent;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Team")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonComponent
public class Team {
    @Id
    private Integer id;
    private String teamName;
}
