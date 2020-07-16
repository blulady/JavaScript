var x = 3;
var y = 4;

function multi() {
    document.getElementById("count").innerHTML = multiply();
    function multiply() {
        function times() {x * y;}
        times();
        return times;
    }
}