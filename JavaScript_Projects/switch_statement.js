function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "red":
            Color_Output = "red" + Color_String;
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