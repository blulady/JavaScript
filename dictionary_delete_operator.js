function my_Dictionary() {
    var Animal = {
        species:"Dog",
        Color:"black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark"
    };
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = Animal.Sound;
}