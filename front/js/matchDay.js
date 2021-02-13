import {getByURL} from './app.js'
import {getTeams} from './app.js'
import {addModal} from './modal.js';
import {api} from './app.js'
import {stadium} from './teamInfoContent.js'


export async function getMatches(url, i) {
    let resp = await getByURL(url, i);
    // console.log(resp)
    let res = [];
    for (i = 0; i < resp.length; i++) {
        let firstTeamScore = resp[i].firstTeamScore
        let secondTeamScore = resp[i].secondTeamScore
        let firstTeam = await getTeams(api + "/getTeamById/" + resp[i].firstTeamId)
        firstTeam = firstTeam.teamName
        let secondTeam = await getTeams(api + "/getTeamById/" + resp[i].secondTeamId)
        secondTeam = secondTeam.teamName
        let id = resp[i].id
        let day = resp[i].matchDay
        res.push({ firstTeam, firstTeamScore, secondTeam, secondTeamScore, id, day });
    }
    return res;
}

export let renderSingleMatch = (id, team1, team2, score1, score2) => {
    return '<div class="currentMatch" id=' + id + '>' +
        '' +
        '                <div class="stadium">' +
        '                    ' + stadium[team1]  +
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

export let renderMatchDayContent = async (elem, idx) => {
    let res = '<div class="matchday-title"><h2>MatchDay ' + idx  +  'th scores<h2></div><div class="matchContent">';
    let matches = await getMatches(api + "/getMatchDay/", idx);
    console.log(idx)
    matches.map(match => {
        res += renderSingleMatch(match.id, match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
        res += '<br>'
    });
    res += '</div>'
    res += '                <div id="myModal" class="modal">' +
        '                    <div class="modal-content">' +
        '                        <span class="close">&times;</span>' +
        '                        <p id="modalText">Some text in the Modal..</p>' +
        '                    </div>' +
        '                </div><br>';
    res +=          '</div>' +
        '                <div id="myBtn" hidden="true">Open Modal</div>' +
        '            </div>'

    elem.innerHTML = res
    addModal();
}