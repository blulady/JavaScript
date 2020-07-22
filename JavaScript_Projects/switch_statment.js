function Color_Function() {
    var Color_Output;
    var Color = document.getElementById("Color_Input").nodeValue;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "red":
            Color_Output = "Red" + Color_String;
        break;
        case "yellow":
            Color_Output = "green" + Color_String;
        break;
        case "yellow":
            Color_Output = "yellow" + Color_String;
        break;
        case "yellow":
            Color_Output = "blue" + Color_String;
        break;
        case "yellow":
            Color_Output = "pink" + Color_String;
        break;
        case "yellow":
            Color_Output = "purple" + Color_String;
        break;
        defalut:
        Color_Output = "Plase enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output
}