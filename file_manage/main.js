// Because the code that navigates to the video page is not working, so write it specially for locationvideo.js. And combine this file with all the files that need to navigate to the video file.

// document.getElementById("header_main_logo_title").innerHTML = "Sun Station's Video";
// document.getElementById("header_bottom_logo_title").innerHTML = "Video của Sun Station";

document.getElementById("header_btn_home").onclick = function() {
    window.location = "/sunstation_film/home";
}

document.getElementById("nav_btn_home").onclick = function() {
    window.location = "/sunstation_film/home";
}
                          
document.getElementById("header_btn_film").onclick = function() {
    window.location = "/sunstation_film/film";
}

document.getElementById("nav_btn_film").onclick = function() {
    window.location = "/sunstation_film/film";
}

document.getElementById("nav_btn_video").onclick = function() {
    window.location = "/sunstation_film/video";
}

document.getElementById("header_btn_poster").onclick = function() {
    window.location = "/sunstation_film/poster";
}

document.getElementById("nav_btn_poster").onclick = function() {
    window.location = "/sunstation_film/poster";
}

document.getElementById("header_btn_short_story").onclick = function() {
    window.location = "/sunstation_film/short_story";
}

document.getElementById("nav_btn_short_story").onclick = function() {
    window.location = "/sunstation_film/short_story";
}

document.getElementById("show_film_script").onclick = function() {
    document.getElementById("film_script").style.display = "block";
    document.getElementById("show_film_script").style.display = "none";
}

document.getElementById("hide_film_script").onclick = function() {
    document.getElementById("film_script").style.display = "none";
    document.getElementById("show_film_script").style.display = "block";
}