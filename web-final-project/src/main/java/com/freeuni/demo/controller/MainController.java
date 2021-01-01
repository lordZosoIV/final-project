package com.freeuni.demo.controller;

import com.freeuni.demo.entity.Player;
import com.freeuni.demo.entity.Team;
import com.freeuni.demo.repository.PlayerRepo;
import com.freeuni.demo.repository.TeamRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
public class MainController {
    private TeamRepo teamRepo;
    private PlayerRepo playerRepo;


    @Autowired
    public void setTeamRepository(TeamRepo teamRepo) {
        this.teamRepo = teamRepo;
    }

    @Autowired
    public void setPlayerRepository(PlayerRepo playerRepo) {
        this.playerRepo = playerRepo;
    }

    @GetMapping(path = "/getAllTeams")
    public List<Team> getAllTeams() {
        if (teamRepo.count() == 0) {
            for (int i = 0; i < ContentConstants.teams.size(); i++) {
                teamRepo.save(new Team(i, ContentConstants.teams.get(i)));
            }
        }
        return teamRepo.findAll();
    }

    @GetMapping(path = "/getTeamById/{id}")
    public Optional<Team> getTeamById(@PathVariable Integer id) {
        return teamRepo.findById(id);
    }


    @GetMapping(path = "/insert")
    public void insertPlayers() {
//        for (Player p : ContentConstants.arsenalPlayers)
//            playerRepo.save(p);

//        for (Player p : ContentConstants.astonVillaPlayers)
//            playerRepo.save(p);

        for (Player p : ContentConstants.brightonPlayers)
            playerRepo.save(p);
    }

}
