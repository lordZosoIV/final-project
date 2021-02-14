package com.freeuni.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.boot.jackson.JsonComponent;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@JsonComponent
public class Standing {
    private int id;
    private String name;
    private int pl;
    private int pt;




}
