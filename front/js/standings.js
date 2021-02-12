import {getTeams} from './app.js'


export async function addTable() {
    const url = 'http://localhost:8080/getAllTeams';
    let resp = await getTeams(url);
    let elem = document.getElementById("tableBody");
    let html = '';
    let i = 0;
    let first;
    for (i = 0; i < resp.length; i++) {
        let pos = i + 1;
        let points = 100 - i;
        let team = resp[i].teamName
        let idx = team.indexOf(' ')
        if (idx > 0) {
            first = team.substr(0, idx + 1);
            team = first
        }
        let pi = 16;
        html += '<tr><td>' + pos + '</td><td><img class="logo" src="../data/logo/' + resp[i].teamName +
            '.png"></img><div  id=' + resp[i].id + '>' + team + '</div></td><td>' + pi + '</td><td>' + points + '</td></tr>';

    }
    elem.innerHTML = html

}