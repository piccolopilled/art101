/*
Lab 10: JavaScript for the Web
Author: Kyla Florentino
Date: 28 May 2025

*/

const lullabyLyrics = [
    "On candy stripe legs the spiderman comes",
    "Softly through the shadow of the evening sun",
    "Stealing past the windows of the blissfully dead",
    "Looking for the victim shivering in bed",
    "Searching out fear in the gathering gloom and",
    "Suddenly a movement in the corner of the room",
    "And there is nothing I can do",
    "When I realize with fright",
    "That the spiderman is having me for dinner tonight",
    "Quietly he laughs and shaking his head",
    "Creeps closer now",
    "Closer to the foot of the bed",
    "And softer than shadow and quicker than flies",
    "His arms are all around me and his tongue in my eyes",
    "Be still be calm be quiet now my precious boy",
    "Don't struggle like that or I will only love you more",
    "For it's much too late to get away or turn on the light",
    "The spiderman is having you for dinner tonight",
    "And I feel like I'm being eaten",
    "By a thousand million shivering furry holes",
    "And I know that in the morning I will wake up",
    "In the shivering cold",
    "And the spiderman is always hungry"
]

$("#lyrics").click(function() {
    const randomIndex = Math.floor(Math.random() * lullabyLyrics.length);
    const lyric = lullabyLyrics[randomIndex];
    $("#output").append('<div class="text"><p>' + lyric + '</p></div>');
});