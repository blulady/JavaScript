function up() {
    var words ="These be words to convert to upper case.";
    var words2 = words.toUpperCase();
    document.getElementById("getup").innerHTML = words2;
}