async function getByURL(url, day) {
    url += day;
    return await get(url).then(function(response) {
        response = JSON.parse(response)
        return response;
    }, function(error) {
        console.error("fetch teams failed!", error);
        return error;
    })
}


async function getMatches(url, i) {
    let resp = await getByURL(url, i);
    // console.log(resp)
    let res = [];
    for (i = 0; i < resp.length; i++) {
        let firstTeamScore = resp[i].firstTeamScore
        let secondTeamScore = resp[i].secondTeamScore
        let firstTeam = await getTeams("http://localhost:8080/getTeamById/" + resp[i].firstTeamId)
        firstTeam = firstTeam.teamName
        let secondTeam = await getTeams("http://localhost:8080/getTeamById/" + resp[i].secondTeamId)
        secondTeam = secondTeam.teamName
        res.push({ firstTeam, firstTeamScore, secondTeam, secondTeamScore });
    }
    return res;
}





// getMatchDay();