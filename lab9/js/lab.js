/*
Lab 9: Libraries & jQuery
Author: Kyla Florentino
Date: May 28 2025

Requirements: jQuery must be loaded for this script to work.

*/

$("#challenges").append("<button id='rainbow'>party with me ₍₍⚞(˶˃ ꒳ ˂˶)⚟⁾⁾</button>");

$("#rainbow").click(function() {
    $("#challenges").toggleClass("special");
});

$("#problems").append("<button id='audio'>play me (⸝⸝⸝╸w╺⸝⸝⸝)</button>");

$("#audio").click(function() {
    var audio = new Audio('./assets/jerk.mp3');
    audio.play();
});

$("#results").append("<button id='pokemon'>evolve me!</button>");

$("#pokemon").click(function() {
    $("#milcery").attr("src", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/869.png");
    $("#greeting").text("hi i'm alcremie now!");
}); 