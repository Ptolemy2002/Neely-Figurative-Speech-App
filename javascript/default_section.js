const DEFAULT_SECTION = "video-section";

function scrollToTop() {
    window.scroll(0, 0);
}

function loadDefaultSection(e) {
    if (e) {
        e.preventDefault();
    }
    document.location.hash = "#" + DEFAULT_SECTION;
}

if (document.location.hash == "" || document.location.hash == "#") {
    loadDefaultSection();
}

// Every time the hash changes, scroll to the top of the page
window.addEventListener("hashchange", scrollToTop, false);

// When the page loads, scroll to the top of the page
window.addEventListener("load", scrollToTop, false);

//Load the default section when you click on the close button
document.querySelector("#menu-close-button").addEventListener("click", (e) => {
    loadDefaultSection(e);
}, false);