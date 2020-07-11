function point_location() {
    var LI4 = {
        channel:"Liver",
        location:"between thumb & index finger",
        depth:.5,
        indication:"pain",
        fun:"mv qi, clear wind"
    };
delete LI4.location;
document.getElementById("point").innerHTML = LI4.location;
}