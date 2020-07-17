function get_date() {
    if (new Date().getHours() < 18) {
    document.getElementById("greet").innerHTML = "How are you today?";
    }
}