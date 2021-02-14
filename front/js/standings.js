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
        
        let pi = resp[i].pl;
        html += '<tr><td>' + pos + '</td><td><img class="logo" src="../data/logo/' + team +
            '.png"></img><div  id=' + resp[i].id + '>' + team + '</div></td><td>' + pi + '</td><td>' + points + '</td></tr>';

    }
    elem.innerHTML = html

}

