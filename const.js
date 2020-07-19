function guitar() {
    const Music = {type:"guitar", brand:"fender", color:"black"};
    Music.color = "blue";
    Music.price = "$900"
    document.getElementById("constant").innerHTML = "The color of the guitar is " +Music.color;
}