import {getStandings} from './app.js'

export async function addTable() {
    let resp = await await getStandings();
    let elem = document.getElementById("tableBody");
    let html = '';
    let i = 0;
    let first;
    for (i = 0; i < resp.length; i++) {
        let pos = i + 1;
        let points = resp[i].pt;
        let team = resp[i].name
        let idx = team.indexOf(' ')
        if (idx > 0) {
            first = team.substr(0, idx + 1);
            team = first
        }
        let pi = resp[i].pl;
        html += '<tr><td>' + pos + '</td><td><img class="logo" src="../data/logo/' + resp[i].name +
            '.png"></img><div  id=' + resp[i].id + '>' + 
            '<a href="#/team_'+resp[i].id+'" style="text-decoration: none; color:black;">'+team+'</a>'+
            '</div></td><td>' + pi + '</td><td>' + points + '</td></tr>';

    }
    elem.innerHTML = html

}

