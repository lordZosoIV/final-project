export let renderPlayerCard = (shirtNumber, name, position, nationality, appearances, cleanSheets, goals, assists) => {
    return '                <div class="playerCard">' +
        '                    <div class="squadPlayerHeader">' +
        '                        <div class="playerCardInfo">' +
        '                            <span style="font-size: larger;">' + shirtNumber + '</span>' +
        '                            <h4 style="font-size: larger;' +
        '                            line-height: 1;">' + name + '</h4>' +
        '                            <span style="font-size: large;">' + position + '</span>' +
        '                        </div>' +
        '                        <img class="player-img" src="https://resources.premierleague.com/premierleague/photos/players/110x140/p80201.png">' +
        '                    </div>' +
        '                    <div class="squadPlayerStats">' +
        '                        <li>' +
        '                            <div>Country</div>' +
        '                            <span>' + nationality + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Appearances</div>' +
        '                            <span>' + appearances + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>CleanSheets</div>' +
        '                            <span>' + cleanSheets + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Goals</div>' +
        '                            <span>' + goals + '</span>' +
        '                        </li>' +
        '                        <li>' +
        '                            <div>Assists</div>' +
        '                            <span>' + assists + '</span>' +
        '                        </li>' +
        '                    </div>' +
        '                </div>' +
        '';

}




export function getPlayerCard(player) {
    return renderPlayerCard(player.shirtNumber, player.name, player.position, player.nationality,
        player.appearances, player.cleanSheets, player.goals, player.assists);
}

