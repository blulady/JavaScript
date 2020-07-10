function My_First_Function() {  //Defining a function & naming it
    var str = "This text is green!";  //defining a variable & giving it a string value
    var result = str.fontcolor("green");  //using the fontcolor method on a str variable
    document.getElementById("Green_Text"). innerHTML=result; //putting the value of result into html element with "Green_Text" id
}