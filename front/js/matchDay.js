async function getMatches(url, day) {
    url += day;
    console.log(url)
    return await get(url).then(function(response) {
        response = JSON.parse(response)
        return response;
    }, function(error) {
        console.error("fetch teams failed!", error);
        return error;
    })
}


async function getMatchDay() {
    for (i = 1; i < days.length; i++) {
        let matchDay = days[i].substr(days[i].indexOf(' ') + 1, days[i].length - days[i].indexOf(' '))
        let resp = await getMatches("http://localhost:8080/getMatchDay/", 1);
        console.log(resp)
    }
}


getMatchDay();