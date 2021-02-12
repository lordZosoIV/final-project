import {getMatches} from './matchDay.js';
import {addModal} from './modal.js';
import {getTeamInfo} from './teamInfoContent.js'
import {getPlayers} from './app.js'
import {renderPlayerCard} from './players.js'
import {renderSingleMatch} from './matchDay.js'
import {getTeamById} from './app.js'

export let renderTeamHomeSimplePage = async (elem, idx) => {
    let i = idx;
    let resUrl = "#/team_" + i + "#/results"
    let squadUrl = "#/team_" + i + "#/squad"
    let teamInfo = "#/team_" + i
    let team = await getTeamById(idx);
    let res = '<div class="teams-page-cont">' +
        '                ' +
        '                <div class="teamContentMenu">' +
        '           <a href=' + teamInfo + ' style="margin-right: 8%;color:white; text-decoration:none;">TeamInfo</a>' +

        '                    <a href=' + squadUrl + ' style="margin-right: 8%;color:white; text-decoration:none;">Squad List</a>' +
        '' +
        '                    <a href=' + resUrl + ' style="margin-right: 8%;color:white; text-decoration:none ">Results</a>' +
        '                </div>' + 


                    '<div>';
      res +=   '    <div class="team-page ">' +


 
                    '        <h1>'+team+'</h1> '+
                
                
                
                                '<div style="width:100%;">'+
                                    '    <div style="float:left">'+
                                    '<img style="width: 10rem; height: 10rem; vertical-align: middle; margin-right: 4px;" src="../data/logo/'+team+'.png"></img>' +
                                    '    </div>'+
                                                '    <div id="team-info" style="font-weight: bold;float: none;">'+
                                                '     </div>'+
                                         '</div>'+
                
                

                             ' </div>';   

                   
            res +=   '</div>'

    
        elem.innerHTML = res;
        document.getElementById("team-info").innerHTML = getTeamInfo(0)  
}


export let renderTeamResults = async (elem, idx) => {
let mainIdx = idx;
let resUrl = "#/team_" + mainIdx + "#/results"
let squadUrl = "#/team_" + mainIdx + "#/squad"
let teamInfo = "#/team_" + idx
let res = '<div class="teams-page-cont">' +
    '                ' +
    '                <div class="teamContentMenu">' +
    '           <a href=' + teamInfo + ' style="margin-right: 8%;color:white; text-decoration:none;">TeamInfo</a>' +

    '                    <a href=' + squadUrl + ' style="margin-right: 8%;color:white; text-decoration:none;">Squad List</a>' +
    '' +
    '                    <a href=' + resUrl + ' style="margin-right: 8%;color:white; text-decoration:none ">Results</a>' +
    '                </div>' + 


                '<div>';
res += '<div class="matchContent">';
let matches = await getMatches("http://localhost:8080/getTeamMatches/", mainIdx);
matches.map(match => {
    res += renderSingleMatch(match.id, match.firstTeam, match.secondTeam, match.firstTeamScore, match.secondTeamScore)
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
elem.innerHTML = res
addModal()
}



export let renderTeamSquad = async (elem, idx) => {
let mainIdx = idx;
let resUrl = "#/team_" + mainIdx + "#/results"
let squadUrl = "#/team_" + mainIdx + "#/squad"
let teamInfo = "#/team_" + idx
let res = '<div class="teams-page-cont">' +
    '                ' +
    '                <div class="teamContentMenu">' +
    '           <a href=' + teamInfo + ' style="margin-right: 8%;color:white; text-decoration:none;">TeamInfo</a>' +
    '                    <a href=' + squadUrl + ' style="margin-right: 8%;color:white; text-decoration:none;">Squad List</a>' +
    '' +
    '                    <a href=' + resUrl + ' style="margin-right: 8%;color:white; text-decoration:none ">Results</a>' +
    '                </div>' + 


                '<div>';

    let players = await getPlayers("http://localhost:8080/getPlayersByTeamId/", mainIdx);
    
    res += '<div class="playersContent">';
    players.map(player => {
        res += renderPlayerCard(player.shirtNumber, player.name, player.position, player.nationality,
        player.appearances, player.cleanSheets, player.goals, player.assists);
            res += '<br>'
    })
    res += '</div>'
    elem.innerHTML = res
}
