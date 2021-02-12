(function() {
    this.tmpl = function tmpl(str) {
        return str
    };
})();


const removeSharp = (path) => {
    let index = path.indexOf('#');
    return path.substring(0, index) + path.substring(index + 1);
}

function getNumberFromHash(){
    let currhash = removeSharp(location.hash.slice(1).slice(1));
    currhash = currhash.replace(/\D/g, "");
    return currhash
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


var routes = {};



function route(path, templateId, controller) {
    path = removeSharp(path);
    routes[path] = {
        templateId: templateId,
        controller: controller
    };
}
var el = null;

function router() {
    var url = location.hash.slice(1) || '/';
    url = removeSharp(url);
    var route = routes[url];
    var idx = tmpl(route.templateId);
    el = el || document.getElementsByClassName('supMid')[0];
    if (el) {
        renderPage(el, idx);
    }
}
window.addEventListener('hashchange', async() => {
    router()
    chosen.innerHTML = await getFromHash()
});
window.addEventListener('load', async() => {
    router()
    chosen.innerHTML = await getFromHash()
});


route('/Home', 0, function() {});
route('/', 0, function() {});

for (i = 1; i < days.length + 1; i++) {
    let dayIndex = i - 1;
    let link = "/" + days[dayIndex]
    route(link, i, function() {});
}

// team's page
for (i = 0; i < 20; i++) {
    let link = "/team_" + i
    route(link, link, function() {});
    link = "/team_" + i + "/results"
    route(link, link, function() {});
    link = "/team_" + i + "/squad"
    route(link, link, function() {});
}


route('/Fantasy', 18, function() {});