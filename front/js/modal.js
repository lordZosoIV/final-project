function getMatchStats(content) {
    return '<div>Ball Position</div>' +
        '            <div id="stat-child">' +
        '' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width:' + content.firstTeamBallPosition + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamBallPosition + '%</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width:' + content.secondTeamBallPosition + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamBallPosition + '%</div >' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div>Shots</div>' +
        '            <div id="stat-child">' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width: ' + content.firstTeamShotsPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamShots + '</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width: ' + content.secondTeamShotsPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamShots + '</div >' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div>Shots on Target</div>' +
        '            <div id="stat-child">' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width: ' + content.firstTeamShotsOnTargetPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamShotsOnTarget + '</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width: ' + content.secondTeamShotsOnTargetPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamShotsOnTarget + '</div >' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div>Attacks</div>' +
        '            <div id="stat-child">' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width: ' + content.firstTeamAttackPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamAttack + '</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width: ' + content.secondTeamAttackPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamAttack + '</div >' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div>Offsides</div>' +
        '            <div id="stat-child">' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width: ' + content.firstTeamOffSidesPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamOffSides + '</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width: ' + content.secondTeamOffSidesPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamOffSides + '</div >' +
        '                </div>' +
        '            </div>' +
        '' +
        '            <div>Saves</div>' +
        '            <div id="stat-child">' +
        '                <div class="progress">' +
        '                    <div class="bar" style="width: ' + content.firstTeamSavesPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent">' + content.firstTeamSaves + '</div >' +
        '                </div>' +
        '                <div class="progress1">' +
        '                    <div class="bar1" style="width: ' + content.secondTeamSavesPercentage + '%; height: 20px;"></div >' +
        '                    <div class="percent1">' + content.secondTeamSaves + '</div >' +
        '                </div>' +
        '            </div>';
}


function getmatchScorers(content) {
    let html = '<div class="playersModalView">' +
        '<div class="scoresFromEachTeam"> ' +
        '<img style="width: 8rem; height: 8rem;" src="../data/logo/' + content.firstTeamName + '.png"></img>' +
        '<div class="playersContentForModal">'
    content.firstTeamGoals.length === 0 ? html += '<h3>Unlucky day for ' + content.firstTeamName + '</h3>' :
        content.firstTeamGoals.map(p => html += getPlayerCard(p))
    html += '</div>'

    +
    '</div> '

    +
    '<div class="scoresFromEachTeam"> ' +
    '<img style="width: 8rem; height: 8rem;" src="../data/logo/' + content.secondTeamName + '.png"></img>'


    +
    '<div class="playersContentForModal">';
    content.secondTeamGoals.length === 0 ? html += '<h3>Unlucky day for ' + content.secondTeamName + '</h3>' :
        content.secondTeamGoals.map(p => html += getPlayerCard(p))
    html += '</div>' +
        '</div> '

    +
    '</div>';
    return html;
}


function getMatchMVP(content) {
    res = '<div class="playersContent">';
    res += getPlayerCard(content.mvp)
    res += '</div>'
    return res
}

async function addModal() {
    var modal = document.getElementById("myModal");
    var btns = document.getElementsByClassName("currentMatch");
    var span = document.getElementsByClassName("close")[0];
    for (i = 0; i < btns.length; i++) {
        let btn = btns[i];
        let parentId = btns[i].id
        let content = await getByURL("http://localhost:8080/getMatchStatsById/", parentId)
        btn.addEventListener('click', function() {
            console.log(content)
            let elem = document.getElementById("modalText");
            elem.innerHTML = '<div class="matchStatistic"><h3>' + content.firstTeamName + ' ' + content.score1 + ' - ' + content.score2 + ' ' + content.secondTeamName + '</h3><br>' +
                '<div class="modalHeader">' +
                '<div id="stats">Stats</div>' +
                '<div id="scorers">Scorers</div>' +
                '<div id="mvp">MVP</div>' +
                '</div>' +
                '<div id="modal-main-container"></div>' +
                '        </div>';
            document.getElementById("modal-main-container").innerHTML = getMatchStats(content);
            modal.style.display = "block";

            document.getElementById("scorers").addEventListener('click', function() {
                document.getElementById("modal-main-container").innerHTML = getmatchScorers(content);
            })

            document.getElementById("stats").addEventListener('click', function() {
                document.getElementById("modal-main-container").innerHTML = getMatchStats(content);
            })

            document.getElementById("mvp").addEventListener('click', function() {
                document.getElementById("modal-main-container").innerHTML = getMatchMVP(content);
            })

        })


        span.addEventListener('click', function() {
            modal.style.display = "none";
        })

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        })
    }
}