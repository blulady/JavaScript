var l = 3;
function add1() {
    console.log(6 + l);
}

function add2() {
    var u = 20;
    console.log( 5 + u);
}

function add3() {
    console.log(u + 8)
}
add1();
add2();
add3();

function all_cats() {
    number = document.getElementById("number").value;
    if (number <= 2) {
        moar = "That is an appropriate amount of kittes.";
    }
    else {
        moar = "That is too many kitties.";
    }
    document.getElementById("cats").innerHTML = moar;
}

function time() {
    var T = new Date().getHours();
    var rep;
    if (T < 12 == T > 0) {
        rep = "It is coffee time!";
    }
    else if (T > 12 == T < 18) {
        rep = "It is time for Moar coffee!";
    }
    else {
        rep = "OMG! I am never going to sleep!";
    }
    document.getElementById("coffee").innerHTML = rep;
}