async function addModal() {
    console.log("vipppppppppppasddddddddddddddddddddddddppppppp")
    var modal = document.getElementById("myModal");

    var btns = document.getElementsByClassName("singleMatch");
    var span = document.getElementsByClassName("close")[0];

    console.log(modal)

    for (i = 0; i < btns.length; i++) {
        let childs = btns[i].getElementsByTagName('*')
        for (let btn of childs) {
            let parentId = btns[i].id
            let content = await getByURL("http://localhost:8080/getMatchById/", 33)

            btn.addEventListener('click', function (event) {
                // let iof = val.indexOf('_');
                // let idx = val.substr(iof + 1, val.length - iof)
                // let club = btns.filter(function (item) {
                //     return item.id == idx
                // }).map(item => item.teamName)[0]
                let elem = document.getElementById("modalText");
                console.log(content)
                elem.innerHTML = '<div class="matchStatistic">'+
                '            <div>Ball Position</div>'+
                '            <div id="stat-child">'+
                ''+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                ''+
                '            <div>Shots</div>'+
                '            <div id="stat-child">'+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                ''+
                '            <div>Shots on Targer</div>'+
                '            <div id="stat-child">'+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                ''+
                '            <div>Attacks</div>'+
                '            <div id="stat-child">'+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                ''+
                '            <div>Offsides</div>'+
                '            <div id="stat-child">'+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                ''+
                '            <div>Saves</div>'+
                '            <div id="stat-child">'+
                '                <div class="progress">'+
                '                    <div class="bar" style="width: 80%; height: 20px;"></div >'+
                '                    <div class="percent">80%</div >'+
                '                </div>'+
                '                <div class="progress1">'+
                '                    <div class="bar1" style="width: 60%; height: 20px;"></div >'+
                '                    <div class="percent1">60%</div >'+
                '                </div>'+
                '            </div>'+
                '        </div>';;
                modal.style.display = "block";
            })
        }
    }


    span.addEventListener('click', function () {
        modal.style.display = "none";
    })

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
}
