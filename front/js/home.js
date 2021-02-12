import { startSlideShow } from './carousel.js';
import { addTable } from './standings.js';





export let homePage = (elem, idx) => {
    elem.innerHTML = '<div class="mid-container">' +
    '            <div class="standing-goat">' +
    '                <div class="table">' +
    '                    <div class="table-header">' +
    '                        <p style=\'font-size: 20;\'>Standings</p>' +
    '                    </div>' +
    '                    <table class="styled-table">' +
    '                       <thead>' +
    '                           <tr>' +
    '                               <th>Pos</th>' +
    '                               <th>Team</th>' +
    '                               <th>PI</th>' +
    '                               <th>Pt</th>' +
    '                           </tr>' +
    '                       </thead>' +
    '                        <tbody id="tableBody">' +
    '                        </tbody>' +
    '                    </table>' +
    '                </div>' +
    '    <div class="last-mvp">' +
    '        <h2>MVP of Last Season</h2> '+
                '<div style="width:100%;">'+
                    '    <div style="float:left; margin-bottom:10px">'+
                    '<img src=https://talksport.com/wp-content/uploads/sites/5/2020/07/GettyImages-1166040970.jpg?strip=all&w=960&quality=100 width=100%>' +
                    '    </div>'+
                        '    <div style="float:none;">'+
                        '        <h3>Manchester City midfielder Kevin de Bruyne has been named the Premier League player of the season.</h3>'+
                        'Kevin De Bruyne has won the Premier League’s Player of the Season award, beating the likes of Liverpool stars Jordan Henderson and Sadio Mane to the prize.He’s also beaten Liverpool right-back Trent Alexander-Arnold, Leicester striker Jamie Vardy, Burnley goalkeeper Nick Pope and Southampton frontman Danny Ings to the prize.'+
                        ''+
                        'The Belgian, 29, scored 13 goals and provided 20 assists in what’s been a stunning Premier League campaign for him personally.'+
                        ''+
                        'The result could be viewed as a surprise as City lost their status as English champions to Liverpool, who wrapped up the title with seven games to spare. De Bruyne and co finished 18 points behind the Reds.'+
                        ''+
                        ''+
                        'However, this has been De Bruyne’s most productive campaign since joining City in 2015.';
                        '     </div>'+
                                '</div>'+
                    ' </div>' +    
                    '         </div> ' +
                    '                <div class="mid-container-center">' +
                    '                   <div>' +
                    '' +
                    '            <div id="carousel" class="carousel">' +
                    '                <div class="slides">' +
                    '                    <div class="slide" data-state="active">' +
                    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">From Zero To Hero</div>' +
                    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/d2d70aa5-da96-44c7-abc4-2a3f3c1b5037/1300856182.jpg?width=1350&height=759"' +
                    '                            width="100%" height="500px" alt="The Scream">' +
                    '                    </div>' +
                    '                    <div class="slide" data-state="active">' +
                    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">KLOPP SHOCK</div>' +
                    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/593efd8e-fb2e-4100-976d-b0af0eefcd8a/1300864565.jpg?width=1350&height=759"' +
                    '                            width="100%" height="500px" alt="The Scream">' +
                    '                    </div>' +
                    '                    <div class="slide" data-state="active">' +
                    '                        <div style="width: 100%; height: 10%; color: #37003c; margin-top: 1%;">FOX, WOLF, WOLF</div>' +
                    '                        <img src="https://resources.premierleague.com/photos/premierleague/photo/2021/02/07/69f988e1-9a8e-46d3-9ef3-551f6e2772c7/1300829523.jpg?width=1350&height=759"' +
                    '                            width="100%" height="500px" alt="The Scream">' +
                    '                    </div>' +
                    '                </div>' +
                    '                <div class="indicators">' +
                    '                    <input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />' +
                    '                    <input class="indicator" name="indicator" data-slide="2" type="radio" />' +
                    '                    <input class="indicator" name="indicator" data-slide="3" type="radio" />' +
                    '                </div>' +
                    '            </div>' +
                    '        </div>';
                addTable();
                startSlideShow();
}



