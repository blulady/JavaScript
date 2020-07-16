function count() {
    document.getElementById("itcounts").innerHTML = thecount();
    function thecount() {
        var starting = 22;
        function plus() {} {starting +=5;}
        plus();
        return starting;
    }
}
