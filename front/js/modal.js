import {getByURL} from './app.js'
import {getPlayerCard} from './players.js'
import {api} from './app.js'

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





async function getmatchScorers(content) {
    let html = '<div class="playersModalView">' +
        '<div class="scoresFromEachTeam"> ' +
        '<img style="width: 8rem; height: 8rem;" src="../data/logo/' + content.firstTeamName + '.png"></img>' +
        '<div class="playersContentForModal">'
    if(content.firstTeamGoals.length === 0){
       html += '<div><h3>Unlucky day for ' + content.firstTeamName + '</h3></div>' 
    }else 
    {  for(let i = 0; i < content.firstTeamGoals.length; i++){
            html += await getPlayerCard(content.firstTeamGoals[i])
       }
    }
    html += '</div>'

    +
    '</div> '

    +
    '<div class="scoresFromEachTeam"> ' +
    '<img style="width: 8rem; height: 8rem;" src="../data/logo/' + content.secondTeamName + '.png"></img>'


    +
    '<div class="playersContentForModal">';
    if(content.secondTeamGoals.length === 0){
        html += '<div><h3>Unlucky day for ' + content.secondTeamName + '</h3></div>' 
    }else {  
         for(let i = 0; i < content.secondTeamGoals.length; i++){
            html += await getPlayerCard(content.secondTeamGoals[i])
        }
     }
    html += '</div>' +
        '</div> '

    +
    '</div>';
    return html;
}


async function getPlayerInModal(content) {
    let res = '<div class="playersContent">';
    res += await getPlayerCard(content)
    res += '</div>'
    return res
}

export async function addModal() {
    var modal = document.getElementById("myModal");
    var btns = document.getElementsByClassName("currentMatch");
    var span = document.getElementsByClassName("close")[0];
    for (let i = 0; i < btns.length; i++) {
        let btn = btns[i];
        let parentId = btns[i].id
        let content = await getByURL(api + "/getMatchStatsById/", parentId)
        btn.addEventListener('click', function() {
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

            document.getElementById("scorers").addEventListener('click', async function() {
                document.getElementById("modal-main-container").innerHTML = await getmatchScorers(content);
            })

            document.getElementById("stats").addEventListener('click', function() {
                document.getElementById("modal-main-container").innerHTML = getMatchStats(content);
            })

            document.getElementById("mvp").addEventListener('click', async function() {
                document.getElementById("modal-main-container").innerHTML = await getPlayerInModal(content.mvp);
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


export async function addModalForSearchedPlayer(player){
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
  
    let content = player
    let elem = document.getElementById("modalText");
    elem.innerHTML = '<div class="matchStatistic"><h3> Search Result For ' + player.name + '</h3><br>' +
                    '</div>' +
                   '<div id="modal-main-container"></div>' +
                 '        </div>';
    modal.style.display = "block";

    document.getElementById("modal-main-container").innerHTML = await getPlayerInModal(content);
    document.getElementById("dropdown-content-search").style.display = "none";
    document.getElementById("search-cont").value = "";

    span.addEventListener('click', function() {
        modal.style.display = "none";
    })

     window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
         }
    })
}


