let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".ham")
let open = 0
let teamsDown = 0;
var e = document.getElementsByClassName("menuBar")[0]
console.log(e)


function toggleHamburger() {
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
    open = open === 0 ? 1 : 0;
}

ham.addEventListener("click", function() {
    open === 0 ? navbar.style.display = 'block' :
        navbar.style.display = 'none';
    toggleHamburger();
})



window.addEventListener("resize", function() {
    if (document.getElementsByClassName("left-header")[0].offsetWidth === 0) {
        if (open)
            document.getElementsByClassName("navbar showNav")[0].style.display = "none";
    }

});






async function loadBurgerTeamsDropDown() {
    const url = 'http://localhost:8080/getAllTeams';
    let resp = [];
    let html = '<span class="teamsDD" id="match-days-burger">Teams</span>' +
        '<i class="arrow down"></i>'
    let link = [];
    resp = await getTeams(url);
    let elem = document.getElementById("match-days-burger");
    elem.addEventListener("click", function() {
        if (teamsDown === 0) {
            for (i = 0; i < resp.length; i++) {
                link = "#/team_" + resp[i].id
                html += '<a href=' + link + ' id=menuTeamIndex' + resp[i].id + ' style="font-size: small;">' + resp[i].teamName + '</a><br>';
            }
        }
        elem.innerHTML = html;
        html = html = '<span class="teamsDD" id="match-days-burger">Teams</span>' +
            '<i class="arrow down"></i>';
        teamsDown = teamsDown === 0 ? 1 : 0;
    })
}
loadBurgerTeamsDropDown()