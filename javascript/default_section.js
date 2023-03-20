const DEFAULT_SECTION = "video-section";

function scrollToTop() {
    window.scroll(0, 0);
}

function loadDefaultSection() {
    if (document.location.hash !== "#nav") {
        if (document.location.hash == "" || document.location.hash == "#") {
            document.location.hash = "#" + DEFAULT_SECTION;
        }
    }
}

loadDefaultSection();

// Every time the hash changes, scroll to the top of the page and load the default section
window.addEventListener("hashchange", () => {
    loadDefaultSection();
    scrollToTop();
}, false);

// When the page loads, scroll to the top of the page
window.addEventListener("load", scrollToTop, false);