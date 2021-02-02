package com.freeuni.demo.controller;

import com.freeuni.demo.entity.Match;
import com.freeuni.demo.entity.Player;
import com.freeuni.demo.entity.Team;
import com.freeuni.demo.repository.MatchRepo;
import com.freeuni.demo.repository.PlayerRepo;
import com.freeuni.demo.repository.TeamRepo;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@RestController
@CrossOrigin("*")
public class MainController {
    private TeamRepo teamRepo;
    private PlayerRepo playerRepo;
    private MatchRepo matchRepo;

    @Autowired
    public void setMatchRepository(MatchRepo matchRepo) {
        this.matchRepo = matchRepo;
    }


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


    @GetMapping(value = "/getPlayersByTeamId/{id}")
    public List<Player> getPlayersByTeamId(@PathVariable String id) {
        if (playerRepo.count() == 0) {
            try {
                fetchPlayers();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return playerRepo.getPlayersByTeamId(id);
    }


    @GetMapping(path = "/getTeamById/{id}")
    public Optional<Team> getTeamById(@PathVariable Integer id) {
        return teamRepo.findById(id);
    }

    @GetMapping(path = "/getAllPlayers")
    public List<Player> getAllPlayers() {
        if (playerRepo.count() == 0) {
            try {
                fetchPlayers();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return playerRepo.findAll();
    }

    @GetMapping(value = "/getMatchDay/{id}")
    public List<Match> getMatchDay(@PathVariable Long id) throws IOException, ParseException {
        if(matchRepo.count() == 0) addMatches();
        List<Match>  res = matchRepo.getMatchByMatchDayOrderByFirstTeamId(id);
        List<Match> r = new ArrayList<>();
        for (int i = 0; i < res.size(); i++) {
            if (1 == i % 2)
                r.add(res.get(i));
        }
        return r;
    }

    @GetMapping(value = "/getTeamMatches/{id}")
    public List<Match> getTeamMatches(@PathVariable Integer id) {
        List<Match> res = matchRepo.getMatchByFirstTeamIdOrSecondTeamIdOrderByMatchDayDesc(id, id);
        List<Match> r = new ArrayList<>();
        for (int i = 0; i < res.size(); i++) {
            if (1 == i % 2)
                r.add(res.get(i));
        }
        return r;
    }

    private void addMatches() throws IOException, ParseException {
        for (int i = 0; i < 20; i++)
            add(i);
    }

    private void add(int indx) throws IOException, ParseException {
        Path currentRelativePath = Paths.get("");
        String s = currentRelativePath.toAbsolutePath().toString();
        Object obj = new JSONParser().parse(new FileReader(s + "/src/main/resources/" + ContentConstants.teams.get(indx) + " Matches.json"));

        JSONObject jo = (JSONObject) obj;

        JSONArray content = (JSONArray) jo.get("content");

        for (Object fixture : content) {
            JSONObject j = (JSONObject) fixture;
            JSONObject jj = (JSONObject) fixture;
            j = (JSONObject) j.get("gameweek");

            Double gameWeek = (Double) j.get("gameweek");

            JSONArray teams = (JSONArray) jj.get("teams");
            ArrayList<Long> scores = new ArrayList<>();
            ArrayList<Integer> teamIds = new ArrayList<>();
            for (Object team : teams) {
                JSONObject teamJson = (JSONObject) team;
                Double score = (Double) teamJson.get("score");
                scores.add(Math.round(score));
                teamJson = (JSONObject) teamJson.get("team");
                String teamName = (String) teamJson.get("name");
                Integer id = teamRepo.getTeamByTeamName(teamName).getId();
                teamIds.add(id);
            }
            Match m = new Match(Math.round(gameWeek), scores.get(0), scores.get(1),
                    teamIds.get(0), teamIds.get(1));
            matchRepo.save(m);
//            System.out.println(m.toString());
        }
    }

    private void fetchPlayers() throws IOException {
        wrap("https://www.premierleague.com/clubs/1/Arsenal/squad", "0");
        wrap("https://www.premierleague.com/clubs/2/Aston-Villa/squad", "1");
        wrap("https://www.premierleague.com/clubs/131/Brighton-and-Hove-Albion/squad", "2");
        wrap("https://www.premierleague.com/clubs/43/Burnley/squad", "3");
        wrap("https://www.premierleague.com/clubs/4/Chelsea/squad", "4");
        wrap("https://www.premierleague.com/clubs/6/Crystal-Palace/squad", "5");
        wrap("https://www.premierleague.com/clubs/7/Everton/squad", "6");
        wrap("https://www.premierleague.com/clubs/34/Fulham/squad", "7");
        wrap("https://www.premierleague.com/clubs/9/Leeds-United/squad", "8");
        wrap("https://www.premierleague.com/clubs/26/Leicester-City/squad", "9");
        wrap("https://www.premierleague.com/clubs/10/Liverpool/squad", "10");
        wrap("https://www.premierleague.com/clubs/11/Manchester-City/squad", "11");
        wrap("https://www.premierleague.com/clubs/12/Manchester-United/squad", "12");
        wrap("https://www.premierleague.com/clubs/23/Newcastle-United/squad", "13");
        wrap("https://www.premierleague.com/clubs/18/Sheffield-United/squad", "14");
        wrap("https://www.premierleague.com/clubs/20/Southampton/squad", "15");
        wrap("https://www.premierleague.com/clubs/21/Tottenham-Hotspur/squad", "16");
        wrap("https://www.premierleague.com/clubs/36/West-Bromwich-Albion/squad", "17");
        wrap("https://www.premierleague.com/clubs/25/West-Ham-United/squad", "18");
        wrap("https://www.premierleague.com/clubs/38/Wolverhampton-Wanderers/squad", "19");

    }

    private void wrap(String url, String teamId) throws IOException {
        Document doc = Jsoup.connect(url).get();
        Elements elements = doc.getElementsByClass("playerOverviewCard active");
        for (Element e : elements) {
            parseName(e, teamId);
        }
    }

    private void parseName(Element e, String teamId) {
        Attributes el = e.select("a[href]").get(0).attributes();
        List<Attribute> a = el.asList();
        String name = "";
        for (Attribute atr : a) {
            if (!atr.getKey().equals("href")) continue;
            String s = atr.getValue();
            name = getName(s);
        }
        String shirtNumber = e.getElementsByClass("number").text();
        String position = e.getElementsByClass("position").text();
        String nationality = "England";
        String appearances = "0";
        String goals = "0";
        String cleanSheets = "0";
        String assists = "0";
        Elements ell = e.getElementsByTag("dl");
        for (Element infos : ell) {

            String info = infos.text().substring(0, infos.text().indexOf(' '));
            switch (info) {
                case "Nationality":
                    String ag = infos.text().substring(infos.text().indexOf(' ') + 1);
                    nationality = ag;
                    break;
                case "Appearances":
                    appearances = infos.text().substring(infos.text().lastIndexOf(' ') + 1);
                    break;
                case "Goals":
                    goals = infos.text().substring(infos.text().indexOf(' ') + 1);
                    break;
                case "Clean":
                    cleanSheets = infos.text().substring(infos.text().lastIndexOf(' ') + 1);
                    break;
                case "Assists":
                    assists = infos.text().substring(infos.text().indexOf(' ') + 1);
            }

        }

        if (appearances.equals("0")) return;
        Player p = new Player(shirtNumber, name, position, nationality,
                appearances, cleanSheets, assists, goals, teamId);
        playerRepo.save(p);
    }

    private static int first(String str) {
        for (int i = 0; i < str.length(); i++) {
            if (Character.isUpperCase(str.charAt(i))) {
                return i;
            }
        }
        return 0;
    }

    private static String getName(String s) {
        int first = first(s);
        int last = s.lastIndexOf('/');
        String sub = s.substring(first, last);
        return sub.replace('-', ' ');
    }


}
