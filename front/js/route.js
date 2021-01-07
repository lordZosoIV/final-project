(function() {
    this.tmpl = function tmpl(str) {
        return str
    };
})();



var routes = {};

function route(path, templateId, controller) {
    routes[path] = {
        templateId: templateId,
        controller: controller
    };
}
var el = null;

function router() {
    var url = location.hash.slice(1) || '/';
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


for (i = 0; i < 20 + 1; i++) {
    let link = "/team_" + i
        // let dayIndex = i - 1;
        // let link = "/" + days[dayIndex]
    route(link, link, function() {});
}

route('/Fantasy', 18, function() {});