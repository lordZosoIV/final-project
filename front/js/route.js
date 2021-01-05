// (function() {
//     var cache = {};

//     this.tmpl = function tmpl(str, data) {
//         return str
//     };
// })();



// var routes = {};
// //
// function route(path, templateId, controller) {
//     routes[path] = {
//         templateId: templateId,
//         controller: controller
//     };
// }
// var el = null;

// function router() {
//     el = el || document.getElementById('view');
//     var url = location.hash.slice(1) || '/';
//     var route = routes[url];
//     if (el && route.controller) {
//         let others = ["1", "2", "3"]
//         for (i = 0; i < 3; i++) {
//             if (others[i] != route.templateId) {
//                 let e = document.getElementById(others[i]);
//                 e.style.display = 'none'
//             }
//         }
//         el.innerHTML = tmpl(route.templateId, new route.controller());
//     }
// }
// window.addEventListener('hashchange', router);
// window.addEventListener('load', router);




// route('/', '1', function() {});
// route('/page1', '2', function() {
//     this.greeting = 'Hello world!';
//     this.moreText = 'Bacon ipsum...';
// });
// route('/page2', '3', function() {
//     this.heading = 'I\'m page two!';
// });