const DEFAULT_SECTION = "video-section";

if (document.location.hash == "" || document.location.hash == "#") {
    document.location.hash = "#" + DEFAULT_SECTION;
}