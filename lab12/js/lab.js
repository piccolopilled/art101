/*
Lab 12: Conditionals
Author: Kyla Florentino
Date: 22 May 2025
*/

function getClan(num) {
    let remainder = num % 4;
    let str = "";
    if (remainder === 0) {
        str = "<h3>ThunderClan: Courage & Honor, Strong, Tenacious</h3> <i>ThunderClan is a peaceful and respectful Clan that generally has all the Clans' best interests at heart. They've been known to take in loners or kittypets who need help, which enables their Clan to grow.</i>";
    } else if (remainder == 1) {
        str = "<h3>RiverClan: Skill & Grace, Swimming, Graceful</h3> <i>RiverClan cats care greatly for their Clanmates. They take great joy in the beauty of the river and are a Clan of strong swimmers, highly skilled at fishing.</i>";
    } else if (remainder == 2) {
        str = "<h3>WindClan: Strength & Speed, Swift, Hardy</h3> <i>WindClan cats are very proud of being closest to both the Moonstone and the Moonpool. They claim they're closest to their ancestors due to this, and because they sleep directly under Silverpelt.</i>";
    } else if (remainder == 3) {
        str = "<h3>ShadowClan: Stealth & Secrets, Stealthy, Cunning</h3> <i>ShadowClan is a proud and fierce Clan that tends to keep to itself. They have the smallest territory, which has made it harder for them compared to the other Clans.</i>";
    }
    return str;
}

$("#button").click(function(){
    let name = $("#input").val()
    console.log(name);
    let nameLength = name.length;
    console.log(nameLength);
    let clan = getClan(nameLength);
    console.log(clan);
    $("#output").html("<p>" + clan + "<p>");
})