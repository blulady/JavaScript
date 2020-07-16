function drivers_age() {
    var age, can_drive;
    age = document.getElementById("age").value;
    can_drive = (age < 25) ? "You are too young":"You are old enough";
    document.getElementById("drive").innerHTML = can_drive + " to drive.";
}

function book(title, author, genre, publishing_date) {
    this.Title = title;
    this.Author = author;
    this.Genre = genre;
    this.Date = publishing_date;
}

var Blue = new book("Blue Moon Rising", "Simon Green", "fantasy", 1991);
var Wheel = new book("The Eye of The World", "Robert Jordan", "fantasy", 1990);
var Incarnations = new book("On A Pale Horse", "Piers Anthony", "fantasy", 1983);

function afunction() {
    document.getElementById("books").innerHTML = "Sam likes " + Wheel.Title + " by " + Wheel.Author
    " which is a " + Wheel.Genre + " book written in" + Wheel.Date;
}

function count() {
    document.getElementById("itcounts").innerHTML = thecount();
    function thecount() {
        var starting = 22;
        function plus() {} {starting +=5;}
        plus();
        return starting;
    }
}

