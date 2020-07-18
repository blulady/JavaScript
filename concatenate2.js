function sentance() {
    var beg1 = "This is ";
    var beg2 = "how you ";
    var beg3 = "not use ";
    var beg4 = "restricted words.";
    var beg5 = beg1.concat(beg2, beg3, beg4);
    document.getElementById("conz").innerHTML = beg5;
}

function fxd() {
    var p = 36.2358;
    document.getElementById("numb").innerHTML = p.toFixed(2);
}

function slide() {
    var friday = "This is friday, the weekend begins.";
    var play = friday.slice(7,14);
    document.getElementById("cuts").innerHTML = play;
}

function change() {
    var cheese = 4652;
    document.getElementById("stringcheese").innerHTML = cheese.toString();
}

function precise() {
    var s = 77.7754;
    document.getElementById("afew").innerHTML = s.toPrecision(4);
}