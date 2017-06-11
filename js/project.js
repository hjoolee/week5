// fahrenheit = (celcius × 1.8) + 32 //
// celcius = (fahrenheit - 32) / 1.8 //

function calculateCelcius () {
	var fahrenheit = document.getElementById("inputFtoC").value;
	document.getElementById("solutionFtoC").innerHTML = (fahrenheit-32) / 1.8 + " &deg;C";
}

document.getElementById("convertFtoC").onclick = calculateCelcius;

function calculateFahrenheit () {
	var celcius = document.getElementById("inputCtoF").value;
	document.getElementById("solutionCtoF").innerHTML = (celcius * 1.8) + 32 + " &deg;F";
}

document.getElementById("convertCtoF").onclick = calculateFahrenheit;

// how to display only 2 decimal places to preserve layout? //