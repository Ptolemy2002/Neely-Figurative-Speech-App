const DEFAULT_SECTION = "video-section";

function scrollToTop() {
    window.scroll(0, 0);
}

if (document.location.hash == "" || document.location.hash == "#") {
    document.location.hash = "#" + DEFAULT_SECTION;
}

// Every time the hash changes, scroll to the top of the page
window.addEventListener("hashchange", scrollToTop, false);
// When the page loads, scroll to the top of the page
window.addEventListener("load", scrollToTop, false);