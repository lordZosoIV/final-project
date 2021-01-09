(function() {
    this.tmpl = function tmpl(str) {
        return str
    };
})();



var routes = {};

const removeSharp = (path) => {
    let index = path.indexOf('#');
    return path.substring(0, index) + path.substring(index + 1);
}

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
window.addEventListener('hashchange', router);
window.addEventListener('load', router);



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