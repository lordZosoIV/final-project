export let days = [];

const teamSites = ["https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.fulhamfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.leedsunited.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.sufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.southamptonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.wba.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "http://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link",
    "https://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link"
]

export function getDays(){
    return days;
}

async function loadTeamLogos() {
    const url = 'http://localhost:8080/getAllTeams';
    let resp = await getTeams(url);
    let elem = document.getElementById("logosBar")
    let html = '';
    let i;
    for (i = 0; i < resp.length; i++) {
        html += '<a href=' + teamSites[i] + ' target="_blank"><img class="logo" src="../data/logo/' + resp[i].teamName + '.png"></img></a>'
    }
    elem.innerHTML = html
}

loadTeamLogos();

export async function get(url) {
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


export async function getByURL(url, idx) {
    url += idx;
    return await get(url).then(function(response) {
        return response;
    }, function(error) {
        console.error("fetch teams failed!", error);
        return error;
    })
}

export async function getPlayers(url, i) {
    let resp = await getByURL(url, i);
    return resp;
}


export async function getTeamById(i) {
    let url = 'http://localhost:8080/getTeamById/';
    console.log(url, i)
    let resp = await getByURL(url, i);
    return resp.teamName;
}



export async function getTeams(url) {
    return await get(url).then(function(response) {
        return response;
    }, function(error) {
        console.error("fetch teams failed!", error);
        return error;
    })
}


async function loadTeamsDropDown() {
    const url = 'http://localhost:8080/getAllTeams';
    let elem = document.getElementsByClassName("dropdown-content-clubs")
    let resp = await getTeams(url);
    let html = '';
    let i;
    for (i = 0; i < resp.length; i++) {
        let link = "#/team_" + resp[i].id
        html += '<a href=' + link + ' id=menuTeamIndex' + resp[i].id + ' style="font-size: small;">' + resp[i].teamName + '</a><br>';
    }
    for (let e of elem) {
        e.innerHTML = html;
    }
}


loadTeamsDropDown();




async function loadMatchDaysDropDown() {
    let i;
    for (i = 1; i < 18; i++) {
        days.push("matchDay_" + i);
    }
    let elem = document.getElementById("dropdown-content-matchDays")
    let html = '';
    for (i = 0; i < days.length; i++) {
        let link = "#/" + days[i]
        html += '<a href=' + link + ' id=' + days[i] + ' style="font-size: small;">' + "matchDay " + (i+1) + '</a><br>';
    }
    elem.innerHTML = html
}



loadMatchDaysDropDown();