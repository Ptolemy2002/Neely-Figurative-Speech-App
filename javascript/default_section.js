const DEFAULT_SECTION = "video-section";
let latest_section = DEFAULT_SECTION;

function scrollToTop() {
    window.scroll(0, 0);
}

function loadSection(section, e) {
    if (e) {
        e.preventDefault();
    }
    document.location.hash = "#" + section;
}

function loadDefaultSection(e) {
    loadSection(DEFAULT_SECTION, e);
}

if (document.location.hash == "" || document.location.hash == "#") {
    loadDefaultSection();
}

// Every time the hash changes, scroll to the top of the page and update the latest section
window.addEventListener("hashchange", () => {
    scrollToTop();
    if (document.location.hash !== "#nav") {
        latest_section = document.location.hash.substring(1);
    }
}, false);

// When the page loads, scroll to the top of the page
window.addEventListener("load", scrollToTop, false);

//Load the default section when you click on the close button
document.querySelector("#menu-close-button").addEventListener("click", (e) => {
    loadSection(latest_section, e);
}, false);