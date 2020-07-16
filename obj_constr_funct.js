function book(title, author, type, publishing_date) {
    this.Title = title;
    this.Author = author;
    this.Date = publishing_date;
}

var Blue = new book("Blue Moon Rising", "Simon Green", "fantasy", 1991)
var Wheel = new book("The Eye of The World", "Robert Jordan", "fantasy", 1990)