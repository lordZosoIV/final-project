async function addTable() {
    const url = 'http://localhost:8080/getAllTeams';
    let resp = await getTeams(url);
    // console.log(resp)
    let elem = document.getElementById("tableBody");
    console.log(elem)
    let html = '';
    for (i = 0; i < resp.length; i++) {
        let pos = i;
        let points = 100 - i;
        let team = resp[i].teamName
        let idx = team.indexOf(' ')
        if (idx > 0) {
            first = team.substr(0, idx + 1);
            team = first
        }
        let gd = 2 * i;
        let pi = 16;
        html += '<tr><td>' + pos + '</td><td><img class="logo" src="../data/logo/' + resp[i].teamName + '.png"></img><button id=standing_' + resp[i].id + '>' + team + '</button></td><td>' + pi + '</td><td>' + gd + '</td><td>' + points + '</td></tr>';


        // <div id="myModal" class="modal">
        //     <div class="modal-content">
        //         <span class="close">&times;</span>
        //         <p>Some text in the Modal..</p>
        //     </div>

        // </div>


    }
    elem.innerHTML = html
    var modal = document.getElementById("myModal");

    for (i = 0; i < resp.length; i++) {
        let tn = 'standing_'
        tn += resp[i].id;
        var btn = document.getElementById(tn);


        var span = document.getElementsByClassName("close")[0];


        btn.addEventListener('click', function(event) {
            // console.log(resp[i].teamName)
            let val = event.target.id;
            let iof = val.indexOf('_');
            let idx = val.substr(iof + 1, val.length - iof)
            let club = resp.filter(function(item) {
                return item.id == idx
            }).map(item => item.teamName)[0]
            let elem = document.getElementById("modalText");
            elem.innerHTML = idx + club;
            modal.style.display = "block";
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
addTable();