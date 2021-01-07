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
    '                <div id="myModal" class="modal">' +
    '                    <div class="modal-content">' +
    '                        <span class="close">&times;</span>' +
    '                        <p id="modalText">Some text in the Modal..</p>' +
    '                    </div>' +
    '                </div>' +
    '                <div class="mid-container-center"></div>' +
    '                <div id="myBtn" hidden="true">Open Modal</div>' +
    '            </div>';

let page1 = (team1, team2, score1, score2) => {
    return '<tr>' +
        '                        <td style="position: relative; padding-left: 5vw;">' +
        '                            <div class="stadium">OLD TRAFFORD</div>' +
        '                            <img class="stadium-logo" src="../data/logo/stadium.png"></img>' +
        '                        </td>' +
        '                    </tr>' +
        '                    <tr style="height: 1vh;"></tr>' +
        '                    <tr class="hoverYes">' +
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









const pages = [page0, page1]


async function renderPage(elem, idx) {
    let res = '<div class="matchContainer">' +
        '' +
        '            <table class="matchDay-table">' +
        '                <tbody id="tableBody">';


    if (idx == 0) {
        console.log("asd")
        elem.innerHTML = page0
        addTable()
        return;
    }
    if (1 <= idx && idx < days.length + 1) {
        let matches = await getMatches("http://localhost:8080/getMatchDay/", idx);
        matches.map(match => {
            res += page1(match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
            res += '<br>'
        });

        res += '</tbody>' +
            '            </table>' +
            '' +
            '' +
            '' +
            '        </div>';


        elem.innerHTML = res

    } else {
        idx = idx.substr(idx.indexOf("_") + 1, idx.length - idx.indexOf("_"))
        console.log(idx)
        let matches = await getMatches("http://localhost:8080/getTeamMatches/", idx);
        matches.map(match => {
            res += page1(match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
            res += '<br>'
        });

        res += '</tbody>' +
            '            </table>' +
            '' +
            '' +
            '' +
            '        </div>';


        elem.innerHTML = res

    }

}