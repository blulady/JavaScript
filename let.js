var outside = "I am outside the building, I can't see in."
document.write(outside);

lostkitty();

function lostkitty() {
    var building = "The kitty is not on the second floor";
    document.getElementById("lostkitty").innerHTML = building;
    
        if(5 > 4) {
            let f = "The kitty is on the third floor";
            document.getElementById("foundkitty").innerHTML = f;
        }
}