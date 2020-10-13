<!DOCTYPE html>

<p id="Constant"></p>
<button onclick="constant_function()">Click here!</button>

function constant_function() {
	const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
	Musical_Instrument.color = "blue";
	Musical_Instrument.price = "$900";
	document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
</html>