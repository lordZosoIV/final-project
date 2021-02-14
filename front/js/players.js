import {getTeamById} from './app.js'
import {getTeamIdByTeamName} from './app.js';


function ImageExist(src){
    if(!/[^a-zA-Z]/.test(src.replace(' ', '')))
        return true;
    return false;    
}


export let renderPlayerCard =  (team, shirtNumber, name, position, nationality, appearances, cleanSheets, goals, assists) => {
    let src = "../data/players/" + name + "/Image_1.jpg";
    let exists = ImageExist(name);
    let teamId = getTeamIdByTeamName(team);
    if(!exists) src = "../data/players/Avatar/avatar.png"
    return '                <div class="playerCard">' +
        '                    <div class="squadPlayerHeader">' +
        '                        <div class="playerCardInfo">' +
        '                            <span style="font-size: larger;">' + shirtNumber + '</span>' +
        '                            <h4 style="font-size: larger;' +
        '                            line-height: 1;">' + name + '</h4>' +
        '                            <span style="font-size: large;">' + position + '</span>' +
        '                        </div>' +
        '                        <img class="player-img"  src="'+ src +'">' +
        '                    </div>' +
        '                    <div class="squadPlayerStats">' +
        '                        <li>' +
        '                            <div></a>Club</div>' +
        '                            <a href="#/team_'+teamId+'"style="text-decoration: none; color:black; margin-right: 3%;margin-left: auto;font-size: 20;">'+team+'</a>' +
        '                        </li>' +
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




export async function getPlayerCard(player) {
    let team = await getTeamById(player.teamId)
    return renderPlayerCard(team, player.shirtNumber, player.name, player.position, player.nationality,
        player.appearances, player.cleanSheets, player.goals, player.assists);
}

