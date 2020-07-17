function dinner_party() {
    attend = document.getElementById("attend").value;
    if (attend >="yes") {
        dinner = "See you later tonight at dinner.";
    }
    else {
        dinner = "Maybe next time";
    }
    document.getElementById("comming_to_dinner").innerHTML = dinner;
}