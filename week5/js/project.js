function calculateCelcius () {
	var fahrenheit = document.getElementById("inputFtoC").value;
	document.getElementById("solutionFtoC").innerHTML = ((fahrenheit-32) / 1.8).toFixed(2) + " &deg;C";
}

document.getElementById("convertFtoC").onclick = calculateCelcius;

function calculateFahrenheit () {
	var celcius = document.getElementById("inputCtoF").value;
	document.getElementById("solutionCtoF").innerHTML = ((celcius * 1.8) + 32).toFixed(2) + " &deg;F";
}

document.getElementById("convertCtoF").onclick = calculateFahrenheit;
