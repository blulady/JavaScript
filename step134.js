function halp() {
    if (new Date().getMinutes() > 11) {
        document.getElementById("afternoon").innerHTML = "Good afternoon?";
    }
}