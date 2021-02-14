export async function renderPage(elem, idx, content) {
    // document.getElementsByClassName("loader")[0].style.display = "block"
    content(elem, idx);
}