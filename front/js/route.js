import {getTeams} from './app.js'
import {days} from './app.js'
import {getChosesItem} from './burgerMenu.js'
import {renderPage} from './render.js'
import {homePage} from './home.js'
import {renderMatchDayContent} from './matchDay.js'
import {renderTeamHomeSimplePage} from './team.js'
import {renderTeamResults} from './team.js'
import {renderTeamSquad} from './team.js'



export var routes = {};


const removeSharp = (path) => {
    let index = path.indexOf('#');
    return path.substring(0, index) + path.substring(index + 1);
}


async function getFromHash() {
    let currhash = removeSharp(location.hash.slice(1).slice(1));
    if (currhash.includes("team_")) {
        currhash = currhash.replace(/\D/g, "");
        let team = await getTeams("http://localhost:8080/getTeamById/" + currhash);
        return team.teamName;
    }else if(currhash.includes("matchDay")) {
        currhash = currhash.replace("_", " ");
    }
    return currhash
}





function route(path, templateId, content) {
    path = removeSharp(path);
    routes[path] = {
        templateId: templateId,
        content: content
    };
}


var elem = null;

function router() {
    var url = location.hash.slice(1) || '/';
    url = removeSharp(url);
    var route = routes[url];
    var idx = route.templateId;
    elem = elem || document.getElementsByClassName('supMid')[0];
    if (elem) {
        renderPage(elem, idx, route.content);
    }
}



function initRouters(){
    route('/Home', 'Home', function(){
        return homePage(elem, 0)
    });
    route('/', 'Home', function(){
        return homePage(elem, 0)
    });
    
    
    for (let i = 1; i < 18; i++) {
        let dayIndex = i - 1;
        let link = "/" + days[dayIndex]
        route(link, i, function(){
            return renderMatchDayContent(elem, i)
        });
    }
    
    for (let i = 0; i < 20; i++) {
        let link = "/team_" + i
        route(link, link, function(){
            return renderTeamHomeSimplePage(elem, i);
        });
        link = "/team_" + i + "/results"
        route(link, link, function(){
            return renderTeamResults(elem, i);
        });
        link = "/team_" + i + "/squad"
        route(link, link, function(){
            return renderTeamSquad(elem, i);
        });
    }
    
    
    
}

window.addEventListener('hashchange', async() => {
    router()
    let toRender = getChosesItem();
    toRender.innerHTML = await getFromHash()
});
window.addEventListener('load', async() => {
    router()
    let toRender = getChosesItem();
    toRender.innerHTML = await getFromHash()
});


initRouters();