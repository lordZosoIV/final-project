let page0 = '<div class="mid-container">' +
    '            <div class="standing-goat">' +
    '                <div class="table">' +
    '                    <div class="table-header">' +
    '                        <p style=\'font-size: 20;\'>Standings</p>' +
    '                    </div>' +
    '                    <table class="styled-table">' +
    '                       <thead>' +
    '                           <tr>' +
    '                               <th>Pos</th>' +
    '                               <th>Team</th>' +
    '                               <th>PI</th>' +
    '                               <th>Pt</th>' +
    '                           </tr>' +
    '                       </thead>' +
    '                        <tbody id="tableBody">' +
    '                        </tbody>' +
    '                    </table>' +
    '                </div>' +
    '    <div class="last-mvp">' +


     
    '        <h2>MVP of Last Season</h2> '+



                '<div style="width:100%;">'+
                    '    <div style="float:left">'+
                    '       <div class="playerCard">' +
                    '                            <div class="squadPlayerHeader">' +
                    '                                    <div class="playerCardInfo"> <span style="font-size: larger;">17</span>' +
                    '                                       <h4 style="font-size: larger;line-height: 1;">' +
                    '                                           Kevin De Bruyne' +
                    '                                            </h4>' +
                    '                                        <span style="font-size: large;">Midfielder</span>' +
                    '                                    </div> '+
                    '                                </div>' +
                    '                       <div class="squadPlayerStats">' +
                    '                     <li>' +
                    '                         <div>Country</div> <span>Belgium</span> </li>' +
                    '                    <li>' +
                    '                           <div>Appearances</div> <span>35</span> </li>' +
                    '                   <li>' +
                    '                           <div>CleanSheets</div> <span>0</span> </li>' +
                    '                   <li>' +
                    '                       <div>Goals</div> <span>13</span> </li>' +
                    '                       <li>' +
                    '                      <div>Assists</div> <span>20</span> </li>' +
                    '                   </div>' +
                    '               </div>' +
                    '    </div>'+
            ''+
            ''+
                        '    <div style="float:none;">'+
                        '        <h3>Manchester City midfielder Kevin de Bruyne has been named the Premier League player of the season.</h3>'+
                        '     </div>'+
                '</div>'+
















    ' </div>' +    //last-mvp



   


    '         </div> ' +
    '                <div class="mid-container-center">' +
    '                   <div>' +
    '' +
    '            <div id="carousel" class="carousel">' +
    '                <div class="slides">' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">From Zero To Hero</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/d2d70aa5-da96-44c7-abc4-2a3f3c1b5037/1300856182.jpg?width=1350&height=759"' +
    '                            width="100%" height="500px" alt="The Scream">' +
    '                    </div>' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">KLOPP SHOCK</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/593efd8e-fb2e-4100-976d-b0af0eefcd8a/1300864565.jpg?width=1350&height=759"' +
    '                            width="100%" height="500px" alt="The Scream">' +
    '                    </div>' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">FOX, WOLF, WOLF</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/69f988e1-9a8e-46d3-9ef3-551f6e2772c7/1300829523.jpg?width=1350&height=759"' +
    '                            width="100%" height="500px" alt="The Scream">' +
    '                    </div>' +
    '                </div>' +
    '                <div class="indicators">' +
    '                    <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />' +
    '                    <input class="indicator" name="indicator" data-slide="2" type="radio" />' +
    '                    <input class="indicator" name="indicator" data-slide="3" type="radio" />' +
    '                </div>' +
    '            </div>' +
    '' +
    '' +
    '' +
    '        </div>';

let page1 = (id, team1, team2, score1, score2) => {
    return '<div class="currentMatch" id=' + id + '>' +
        '' +
        '                <div class="stadium">' +
        '                    OLD TRAFFORD' +
        '                    <img class="stadium-logo" src="../data/logo/stadium.png"></img>' +
        '                    <div class="match-leauge-logo">' +
        '                        <img style="width: 12vw; height: 2rem; vertical-align: middle;" src="../data/logo/premier-league-3-logo.png "></img>' +
        '' +
        '                    </div>' +
        '                </div>' +
        '' +
        '                <div class="match-teams">' +
        '                    <div class="home-team">' +
        '                        ' + team1 +
        '                    </div>' +
        '                    <img style="width: 2rem; height: 2rem; vertical-align: middle; margin-right: 4px;" src="../data/logo/' + team1 + '.png"></img>' +
        '                    <div class="home-team-score">' + score1 + '</div>' +
        '                    <div class="away-team-score">' + score2 + '</div>' +
        '                    <img style="width: 2rem; height: 2rem; vertical-align: middle; margin-left: 4px;" src="../data/logo/' + team2 + '.png"></img>' +
        '                    <div class="away-team">' +
        '                        ' + team2 +
        '                    </div>' +
        '                </div>' +
        '' +
        '' +
        '            </div>';;


}

function getPlayerCard(player) {
    return page2(player.shirtNumber, player.name, player.position, player.nationality,
        player.appearances, player.cleanSheets, player.goals, player.assists);
}

let page2 = (shirtNumber, name, position, nationality, appearances, cleanSheets, goals, assists) => {
    return '                <div class="playerCard">' +
        '                    <div class="squadPlayerHeader">' +
        '                        <div class="playerCardInfo">' +
        '                            <span style="font-size: larger;">' + shirtNumber + '</span>' +
        '                            <h4 style="font-size: larger;' +
        '                            line-height: 1;">' + name + '</h4>' +
        '                            <span style="font-size: large;">' + position + '</span>' +
        '                        </div>' +
        '                        <img class="player-img" src="https://resources.premierleague.com/premierleague/photos/players/110x140/p80201.png">' +
        '                    </div>' +
        '                    <div class="squadPlayerStats">' +
        '                        <li>' +
        '                            <div>Country</div>' +
        '                            <span>' + nationality + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Appearances</div>' +
        '                            <span>' + appearances + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>CleanSheets</div>' +
        '                            <span>' + cleanSheets + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Goals</div>' +
        '                            <span>' + goals + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Assists</div>' +
        '                            <span>' + assists + '</span>' +
        '                        </li>' +
        '                    </div>' +
        '                </div>' +
        '';

}





function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}



const pages = [page0, page1]


async function renderPage(elem, idx) {
    let res = '<div class="matchday-title"><h2>MatchDay ' + getNumberFromHash()  + 'th scores<h2></div><div class="matchContent">';

    let flag = 0;
    if (idx == 0) {
        elem.innerHTML = page0
        addTable();
        startSlideShow();
        return;
    }
    if (1 <= idx && idx < days.length + 1) {
        let matches = await getMatches("http://localhost:8080/getMatchDay/", idx);
        matches.map(match => {
            res += page1(match.id, match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
            res += '<br>'
        });
        res += '</div>'

        res += '                <div id="myModal" class="modal">' +
            '                    <div class="modal-content">' +
            '                        <span class="close">&times;</span>' +
            '                        <p id="modalText">Some text in the Modal..</p>' +
            '                    </div>' +
            '                </div><br>';
        res += '</div>' +
            '                <div id="myBtn" hidden="true">Open Modal</div>' +
            '            </div>'

        elem.innerHTML = res
        addModal();
        return
    }
    if (idx.includes("/team")) {
        let i = idx.match(/\d/g).join("");
        let resUrl = "#/team_" + i + "#/results"
        let squadUrl = "#/team_" + i + "#/squad"
        let res = '<div class="teams-page-cont">' +
            '                ' +
            '                <div class="teamContentMenu">' +
            '                    <a href=' + squadUrl + ' style="margin-right: 8%;color:white; text-decoration:none;">Squad List</a>' +
            '' +
            '                    <a href=' + resUrl + ' style="margin-right: 8%;color:white; text-decoration:none ">Results</a>' +
            '                </div>' + 





                        '<div>'+



                        '    <div class="team-page ">' +


     
                        '        <h1>Arsenal</h1> '+
                    
                    
                    
                                    '<div style="width:100%;">'+
                                        '    <div style="float:left">'+
                                        '<img style="width: 10rem; height: 10rem; vertical-align: middle; margin-right: 4px;" src="../data/logo/Arsenal.png"></img>' +
                                        '    </div>'+
                                ''+
                                ''+
                                            '    <div id="team-info" style="font-weight: bold;float: none;">'+
                                            '     </div>'+
                                    '</div>'+
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                        ' </div>' +   






                        '</div>'
        if (idx.includes("/results")) {
            let mainIdx = idx.match(/\d/g).join("");
            res += '<div class="matchContent">';
            let matches = await getMatches("http://localhost:8080/getTeamMatches/", mainIdx);
            matches.map(match => {
                res += page1(match.id, match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
                res += '<br>'
            });

            res += '</div>';
            res += '                <div id="myModal" class="modal">' +
                '                    <div class="modal-content">' +
                '                        <span class="close">&times;</span>' +
                '                        <p id="modalText">Some text in the Modal..</p>' +
                '                    </div>' +
                '                </div><br>';
            res += '</div>' +
                '                <div id="myBtn" hidden="true">Open Modal</div>' +
                '            </div>'
            flag = 1;
        } else if (idx.includes("/squad")) {
            let mainIdx = idx.match(/\d/g).join("");

            let players = await getPlayers("http://localhost:8080/getPlayersByTeamId/", mainIdx);

            res += '<div class="playersContent">';
            players.map(player => {
                res += page2(player.shirtNumber, player.name, player.position, player.nationality,
                    player.appearances, player.cleanSheets, player.goals, player.assists);
                res += '<br>'
            })
            res += '</div>'
            flag = 0;
        }

        elem.innerHTML = res
        let a = 'Arsenal.html'                   
        document.getElementById("team-info").innerHTML = getTeamInfo(0)
        if (flag === 1) addModal();
    }

}