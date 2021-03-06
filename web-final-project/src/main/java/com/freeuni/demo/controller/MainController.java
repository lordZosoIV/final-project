package com.freeuni.demo.controller;

import com.freeuni.demo.entity.*;
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
    public List<Team> getAllTeams() throws IOException, ParseException {
        if (teamRepo.count() == 0) {
//            if(matchRepo.count() == 0) addMatches();
            for (int i = 0; i < ContentConstants.teams.size(); i++) {
                teamRepo.save(new Team(i, ContentConstants.teams.get(i)));
            }
        }
        return teamRepo.findAll();
    }


    @GetMapping(path = "/hello")
    public String h() throws IOException, ParseException {
        return "hello";
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


    @GetMapping(path = "/getPlayerById/{id}")
    public Player getPlayerById(@PathVariable Integer id) {
        return playerRepo.findById(id).orElse(null);
    }

    @GetMapping(path = "/getAllPlayers")
    public List<Player> getAllPlayers() throws IOException, ParseException {
        if (playerRepo.count() == 0) {
            if(matchRepo.count() == 0) addMatches();
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


    @GetMapping(value = "/searchByPattern/{pattern}")
    public List<Player> getByPattert(@PathVariable String pattern){
        return playerRepo.searchByPattern(pattern);
    }

    @GetMapping(value = "/getMatchStatsById/{id}")
    public Statistic getMatchById(@PathVariable Integer id){
        Match m = matchRepo.findById(id).orElse(null);
        if(m == null) return null;

        String firstTeamName = teamRepo.getTeamById(m.getFirstTeamId()).getTeamName();
        String secondTeamName = teamRepo.getTeamById(m.getSecondTeamId()).getTeamName();


        Integer firstTeam = m.getFirstTeamId();
        Integer secondTeam = m.getSecondTeamId();

        int score1 = Math.toIntExact(m.getFirstTeamScore());
        int score2 = Math.toIntExact(m.getSecondTeamScore());


        ArrayList<Player> arr1 = (ArrayList<Player>) playerRepo.getPlayersByTeamIdOrderByGoalsDesc(firstTeam.toString());
        ArrayList<Player> goals1 = new ArrayList<>();
        for(int i = 0; i < score1; i++){
            goals1.add(arr1.get(i));
        }

        ArrayList<Player> arr2 = (ArrayList<Player>) playerRepo.getPlayersByTeamIdOrderByGoalsDesc(secondTeam.toString());
        ArrayList<Player> goals2 = new ArrayList<>();
        for(int i = 0; i < score2; i++){
            goals2.add(arr2.get(i));
        }

        Player mvp = new Player();
        if(goals1.size() > 0) mvp = goals1.get(0);
        else if(goals2.size() > 0) mvp = goals2.get(0);
        else mvp = playerRepo.getPlayerByTeamIdOrderByGoalsDesc(firstTeam.toString()).get(0);

        Random r = new Random();
        int low = 30;
        int high = 70;
        int result = r.nextInt(high-low) + low;

        double score1Percentage = result;
        double score2Percentage = 100 - result;

        int firstTeamShots = score1 + 2;
        int secondTeamShots = score2 + 3;

        double firstTeamShotsPercentage = (double) (100 * firstTeamShots) / (firstTeamShots + secondTeamShots);
        double secondTeamShotsPercentage = (double)(100 * secondTeamShots) / (firstTeamShots + secondTeamShots);

        int firstTeamShotsOnTarget = score1 + 1;
        int secondTeamShotsOnTarget = score2 + 1;

        double firstTeamShotsOnTargetPercentage = (double)(100 * firstTeamShotsOnTarget) / (firstTeamShotsOnTarget + secondTeamShotsOnTarget);
        double secondTeamShotsOnTargetPercentage = (double)(100 * secondTeamShotsOnTarget) / (firstTeamShotsOnTarget + secondTeamShotsOnTarget);


        int firstTeamAttack = firstTeamShotsOnTarget * 4;
        int secondTeamAttack = secondTeamShotsOnTarget * 5;

        double firstTeamAttackPercentage = (double)(100 * firstTeamAttack) /(firstTeamAttack + secondTeamAttack);
        double secondTeamAttackPercentage = (double)(100 * secondTeamAttack) /(firstTeamAttack + secondTeamAttack);

        int firstTeamOffSides = score1 + 1;
        int secondTeamOffSides = score2 + 1;

        double firstTeamOffSidesPercentage = (double)(100 * firstTeamOffSides) / (firstTeamOffSides + secondTeamOffSides);
        double secondTeamOffSidesPercentage = (double)(100 * secondTeamOffSides) / (firstTeamOffSides + secondTeamOffSides);


        int firstTeamSaves = Math.max(score2, 2);
        int secondTeamSaves = Math.max(score1, 1);

        double firstTeamSavesPercentage = (double)(100 * firstTeamSaves) / (secondTeamSaves + firstTeamSaves);
        double secondTeamSavesPercentage = (double)(100 * secondTeamSaves) / (secondTeamSaves + firstTeamSaves);

        Statistic s = new Statistic(firstTeamName, secondTeamName, score1, score2, score1Percentage, score2Percentage,
                firstTeamShots, secondTeamShots, firstTeamShotsPercentage, secondTeamShotsPercentage,
                firstTeamShotsOnTarget, secondTeamShotsOnTarget, firstTeamShotsOnTargetPercentage, secondTeamShotsOnTargetPercentage,
                firstTeamAttack, secondTeamAttack, firstTeamAttackPercentage, secondTeamAttackPercentage,
                firstTeamOffSides, secondTeamOffSides, firstTeamOffSidesPercentage, secondTeamOffSidesPercentage,
                firstTeamSaves, secondTeamSaves, firstTeamSavesPercentage, secondTeamSavesPercentage,
                goals1, goals2, mvp);

        return s;
    }

    @GetMapping(value = "/getStandings")
    public List<Standing> getS() {
       return new ArrayList<>(Arrays.asList(
               new Standing(10,
                       "Liverpool",
                       17,		33),

               new Standing(12, "Manchester United",
                       16,	33),

               new Standing(9, "Leicester City",
                       17,		32),

               new Standing(16, "Tottenham Hotspur",
                       16,		29),

               new Standing(11, "Manchester City",
                       15,		29),

               new Standing(15, "Southampton",
                       17,		29),


               new Standing(6, "Everton",
                       16,		29),

               new Standing(1, "Aston Villa",
                       15,		26),


               new Standing(4, "Chelsea",
                       17,		26),



               new Standing(18, "West Ham United",
                       17,		26),

               new Standing(0, "Arsenal",
                       17,		23),

               new Standing(8, "Leeds United",
                       17,		23),

               new Standing(19, "Wolverhampton Wanderers" ,17 ,22),

               new Standing(5, "Crystal Palace",
                       17,		22),

               new Standing(13, "Newcastle United", 16, 19),

               new Standing(3 ,"Burnley",
                       15,		16),


               new Standing(2, "Brighton and Hove Albion",
                       17,		14),

               new Standing(7, "Fulham",
                       15,		11),

               new Standing(17, "West Bromwich Albion", 17, 8),

               new Standing(14, "Sheffield United", 17,2)

       ));
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
            String demo = infos.text();
            String info = "Nationality";
            if(demo.indexOf(' ') > 0)
                info = infos.text().substring(0, infos.text().indexOf(' '));
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