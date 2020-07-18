function where() {
    var things ="I will be searching this text with the search method.";
    var words = things.search("searching");
    document.getElementById("look").innerHTML = words;
}