    // document.getElementById('btn').addEventListener('click', function(e) {
    //     alert("givi magaria")
    // })
    const teams = ['Arsenal', 'Aston Villa', 'brightonandhovealbion', 'burnley', 'chelsea',
        'crystalpalace', 'everton', 'fulham', 'leedsunited', 'leicester', 'liverpool',
        'manchestercity', 'manchesterunited', 'newcastleunited', 'sheffield', 'southampton', 'tottenham',
        'westBromwich', 'westHam', 'wolves'
    ]

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

    function loadTeamLogos() {
        let elem = document.getElementById("logosBar")
        let html = '';
        for (i = 0; i < teams.length; i++) {
            html += '<a href=' + teamSites[i] + ' target="_blank"><img class="logo" src="../data/logo/' + teams[i] + '.png"></img></a>'
        }
        elem.innerHTML = html
    }

    loadTeamLogos();



    // var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8080/getAllTeams', true);
    const url = 'http://localhost:8080/getAllTeams';

    function get(url) {
        return new Promise(function(resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url);
            req.onload = function() {
                if (req.status == 200) {
                    resolve(req.response);
                } else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function() {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }

    async function getTeams() {
        return await get(url).then(function(response) {
            console.log("fetch teams successed");
            response = JSON.parse(response)
            return response;
        }, function(error) {
            console.error("fetch teams failed!", error);
            return error;
        })
    }


    async function loadTeamsDropDown() {
        let elem = document.getElementById("dropdown-content")
        console.log(elem)
        let resp = await getTeams();
        console.log(resp)
        let html = '';
        for (i = 0; i < resp.length; i++) {
            html += '<a href="s" id=menuTeamIndex' + resp[i].id + ' style="font-size: small;">' + resp[i].teamName + '</a><br>';
        }
        elem.innerHTML = html
    }


    loadTeamsDropDown();