import {getPlayerByPattern} from './app.js'
import {getPlayerById} from './app.js'
import {addModalForSearchedPlayer} from './modal.js'

  
  function renderNames(players) {
    let html = "";
    for (let i = 0; i < players.length; i++) {
      html += '<div id="search_player_' + players[i].id +'" style="font-size: small;">' + players[i].name + '</div>';
    }
    if(players.length > 0) document.getElementById("dropdown-content-search").style.display = "block";
    document.getElementById("dropdown-content-search").innerHTML = html;
    
    for (let i = 0; i < players.length; i++) {
        let p;
        document.getElementById('search_player_' + players[i].id).addEventListener('click', async function(){
            p = await getPlayerById(players[i].id);
            document.getElementById("search-cont").value = p.name
            addModalForSearchedPlayer(p)
        })
      }
  }
  


document.getElementById("search-cont").addEventListener('keyup', async function(event){
    let name = event.target.value;
    if(name.length < 3) return;
    let values = await getPlayerByPattern(name);
    renderNames(values)
})