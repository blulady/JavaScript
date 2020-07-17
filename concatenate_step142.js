function full() {
    var p1 = "I have ";
    var p2 = "made this ";
    var p3 = "into a complete ";
    var p4 = "sentence.";
    var whole = p1.concat(p3, p2, p4);
    document.getElementById("con").innerHTML = whole;
}