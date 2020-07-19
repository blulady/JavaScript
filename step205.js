function countstories() {
    var story = "";
    var C = 1;
    while (C < 12) {
        story += "<br>" + C;
        C++;
    }
    document.getElementById("12stories").innerHTML = C;
}

var stories = ["first story", "second story", "third story", "fourth story"];
var inside ="";
var S;
function count_stories() {
    for (S = 0; S <stories.length; S++) {
        inside += stories[S] + "<br>"
    }
    document.getElementById("goingup").innerHTML = inside;
}

function sleeping() {
    cat = [];
    cat[0] = "first story";
    cat[1] = "second story";
    cat[2] = "third story";
    cat[3] = "fourth story";
    document.getElementById("whichstory").innerHTML = "The cat is sleeping on the " + cat[2] + ".";
}