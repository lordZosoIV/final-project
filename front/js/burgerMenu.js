let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".ham")
let open = 0
let teamsDown = 0;
let daysDown = 0;
let chosen = document.getElementById("chosen");


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
    let w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (w > 500) {
        if (open) {
            open = 0;
            teamsDown = 0;
            daysDown = 0;
            // document.getElementsByClassName("navbar showNav")[0].style.display = 'none';
            document.getElementsByClassName("navbar showNav")[0].style.display = "none"
            document.getElementById("teams-burger").innerHTML = '<span class="teamsDD">Teams</span>' +
                '<i class="arrow down"></i>' +
                '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
                '</div>'
            document.getElementById("days-burger").innerHTML = '<span class="matchDaysDD">Match Days</span>' +
                '<i class="arrow down"></i>' +
                '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
                '</div>'
            ham.classList.toggle("showClose")
            navbar.classList.toggle("showNav")
        }
    }

});






async function loadBurgerTeamsDropDown() {
    const url = 'http://localhost:8080/getAllTeams';
    let resp = [];
    let html = '<span class="teamsDD">Teams</span>' +
        '<i class="arrow down"></i>' +
        '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
        '</div>'
    let link = [];
    resp = await getTeams(url);
    let elem = document.getElementById("teams-burger");
    elem.addEventListener("click", function() {
        if (teamsDown === 0) {
            html += '<br>'
            for (i = 0; i < resp.length; i++) {
                link = "#/team_" + resp[i].id
                html += '<a href=' + link + ' id=menuTeamIndex' + resp[i].id + ' style="font-size: small; text-decoration:none"><div>' + resp[i].teamName + '</div></a><br>';
            }

            document.getElementById("days-burger").innerHTML = '<span class="matchDaysDD">Match Days</span>' +
                '<i class="arrow down"></i>' +
                '<div class="dropdown-content-days id="burger-dropdown-content-clubs">' +
                '</div>';
        }
        elem.innerHTML = html;
        html = '<span class="teamsDD">Teams</span>' +
            '<i class="arrow down"></i>' +
            '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
            '</div>';
        teamsDown = teamsDown === 0 ? 1 : 0;
    })
}
loadBurgerTeamsDropDown()

document.getElementById("burger-home").addEventListener('click', function() {
    chosen.innerHTML = "Home"
})




async function loadBurgerDaysDropDown() {
    let days = [];
    for (i = 1; i < 18; i++) {
        days.push("matchDay_" + i);
    }
    let elem = document.getElementById("days-burger")
    let html = '<span class="matchDaysDD">Match Days</span>' +
        '<i class="arrow down"></i>' +
        '<div class="dropdown-content-days id="burger-dropdown-content-clubs">' +
        '</div>'
    elem.addEventListener("click", function() {
        if (daysDown === 0) {
            html += '<br>'
            for (i = 0; i < days.length; i++) {
                let link = "#/" + days[i]
                html += '<a href=' + link + ' id=' + days[i] + ' style="font-size: small; text-decoration:none"><div>' + "matchDay " + (i+1) + '</div></a><br>';
            }
            document.getElementById("teams-burger").innerHTML = '<span class="teamsDD">Teams</span>' +
                '<i class="arrow down"></i>' +
                '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
                '</div>';
        }
        elem.innerHTML = html
        html = '<span class="matchDaysDD">Match Days</span>' +
            '<i class="arrow down"></i>' +
            '<div class="dropdown-content-days" id="burger-dropdown-content-clubs">' +
            '</div>'
        daysDown = daysDown === 0 ? 1 : 0;

    })
}
loadBurgerDaysDropDown()