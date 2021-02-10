let page0 = '<div class="mid-container">' +
    '                <div class="table">' +
    '                    <div class="table-header">' +
    '                        <p style=\'font-size: 2vw;\'>Standings</p>' +
    '                    </div>' +
    '                    <table class="styled-table">' +
    '                       <thead>' +
    '                           <tr>' +
    '                               <th>Pos</th>' +
    '                               <th>Team</th>' +
    '                               <th>PI</th>' +
    '                               <th>GD</th>' +
    '                               <th>Pts</th>' +
    '                           </tr>' +
    '                       </thead>' +
    '                        <tbody id="tableBody">' +
    '                        </tbody>' +
    '                    </table>' +
    '                </div>' +
    '                <div class="mid-container-center">' +
    '<div>' +
    '' +
    '            <div id="carousel" class="carousel">' +
    '                <div class="slides">' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">From Zero To Hero</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/d2d70aa5-da96-44c7-abc4-2a3f3c1b5037/1300856182.jpg?width=1350&height=759"' +
    '                            width="100%" height="500vh" alt="The Scream">' +
    '                    </div>' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">KLOPP SHOCK - Tough day for Liverpool</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/593efd8e-fb2e-4100-976d-b0af0eefcd8a/1300864565.jpg?width=1350&height=759"' +
    '                            width="100%" height="88.5%" alt="The Scream">' +
    '                    </div>' +
    '                    <div class="slide" data-state="active">' +
    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">FOX, WOLF, WOLF - Wolves edging it. Just</div>' +
    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/69f988e1-9a8e-46d3-9ef3-551f6e2772c7/1300829523.jpg?width=1350&height=759"' +
    '                            width="100%" height="88.5%" alt="The Scream">' +
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
    return '<tr>' +
        '                        <td style="position: relative; padding-left: 5vw;">' +
        '                            <div class="stadium">OLD TRAFFORD</div>' +
        '                            <img class="stadium-logo" src="../data/logo/stadium.png"></img>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr style="height: 1vh;"></tr>' +
        '                    <tr class="singleMatch" id="' + id + '">' +
        '                        <td style="text-align:right; margin-right: 10px;">' +
        '                            <div class="team">' +
        '                                <div>' + team1 + '</div>' +
        '                            </div>' +
        '                            <img style="width: 2rem; height: 2rem; vertical-align: middle;" src="../data/logo/' + team1 + '.png"></img>' +
        '' +
        '                        </td>' +
        '                        <td class="score">' +
        '                            <div>' + score1 + '</div>' +
        '                            <div>:</div>' +
        '                            <div>' + score2 + '</div>' +
        '                        </td>' +
        '                        <td style="text-align:left;">' +
        '                            <img style="padding-left:2%; width: 2rem; height: 2rem; vertical-align: middle;" src="../data/logo/' + team2 + '.png"></img>' +
        '                            <div class="team">' +
        '                                <div>' + team2 + '</div>' +
        '                            </div>' +
        '                        </td>' +
        '                        <td>' +
        '                            <img style="width: 12vw; height: 2rem; vertical-align: middle;" src="../data/logo/premier-league-3-logo.png "></img>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr style="height: 5vh;"></tr>';


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
    let res = '<div class="matchContainer">' +
        '' +
        '            <table class="matchDay-table">' +
        '                <tbody id="tableBody">';

    let flag = 0;
    if (idx == 0) {
        console.log("asd")
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

        res += '</tbody>' +
            '            </table>' +
            '        </div>';

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
            '                </div>';
        if (idx.includes("/results")) {
            let mainIdx = idx.match(/\d/g).join("");
            res += '<div class="matchContainer">' +
                '' +
                '            <table class="matchDay-table">' +
                '                <tbody id="tableBody">';
            let matches = await getMatches("http://localhost:8080/getTeamMatches/", mainIdx);
            matches.map(match => {
                res += page1(match.id, match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
                res += '<br>'
            });

            res += '</tbody>' +
                '            </table>' +
                '        </div>';


            res += '</div><br>'
            res += '                <div id="myModal" class="modal">' +
                '                    <div class="modal-content">' +
                '                        <span class="close">&times;</span>' +
                '                        <p id="modalText">Some text in the Modal..</p>' +
                '                    </div>' +
                '                </div><br>';
            res += '</div>' +
                '                <div id="myBtn" hidden="true">Open Modal</div>' +
                '            </div>'
            console.log("vipppppppppppppppppp")
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
        }
        res += "</div>"

        elem.innerHTML = res
        if (flag === 1) addModal();
    }

}