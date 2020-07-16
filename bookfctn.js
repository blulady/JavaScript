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