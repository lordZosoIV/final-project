import { getPlayerByPattern } from './app.js'
import { getPlayerById } from './app.js'
import { addModalForSearchedPlayer } from './modal.js'


let name = [];


function renderNames(players) {
    let html = "";
    for (let i = 0; i < players.length; i++) {
        html += '<div id="search_player_' + players[i].id + '" style="font-size: small;">' + players[i].name + '</div>';
    }
    if (players.length > 0) document.getElementById("dropdown-content-search").style.display = "block";
    document.getElementById("dropdown-content-search").innerHTML = html;

    for (let i = 0; i < players.length; i++) {
        let p;
        document.getElementById('search_player_' + players[i].id).addEventListener('click', async function() {
            p = await getPlayerById(players[i].id);
            document.getElementById("search-cont").value = p.name
            addModalForSearchedPlayer(p)
        })
    }
}


async function searchEvent(event){
    let pattern = event.target.value;
    name = pattern;
    if (pattern.length < 3) return;
    let values = await getPlayerByPattern(pattern);
    renderNames(values)
}

document.getElementById("search-cont").addEventListener('keyup',  async function(event){
    searchEvent(event);   
})


document.getElementById("dropdown-content-search").addEventListener('mouseout', function() {
    document.getElementById("dropdown-content-search").style.display = "none"
    // document.getElementById("search-cont").value = ""
});


document.getElementById("dropdown-content-search").addEventListener('mouseover', function() {
    document.getElementById("dropdown-content-search").style.display = "block";
    document.getElementById("search-cont").value = name;
});


document.getElementById("search-cont").addEventListener('mouseenter',  async function(event){
    searchEvent(event);   
})