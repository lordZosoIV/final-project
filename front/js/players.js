async function getPlayers(url, i) {
    let resp = await getByURL(url, i);
    return resp;
}