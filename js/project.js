//To convert temperatures in degrees Celsius to Fahrenheit, 
//multiply by 1.8 (or 9/5) and add 32.


var celcius;
var fahrenheit;
var celciusInput;
var fahrenheitInput;


function toCelcius () {
	fahrenheitInput = document.getElementById("inputFtoC").value;
	var celcius = (fahrenheitInput - 32) / 1.8 //+ ("&deg;C")
	document.getElementById("solutionFtoC").innerHTML= celcius;


	if (fahrenheitInput > 70) {
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "none";
	}

	else if (fahrenheitInput <= 70 && fahrenheitInput > 50) {
	document.body.style.backgroundColor = "orange";
	document.body.style.backgroundImage = "none";
	
	}

	else if (fahrenheitInput <= 50) {
	document.body.style.backgroundColor= "blue"
	document.body.style.backgroundImage = "none";
	
	}
}

document.getElementById("convertFtoC").onclick = toCelcius;



function tofahrenheit () {
	celciusInput = document.getElementById("inputCtoF").value;
	var fahrenheit = (celciusInput * 1.8) + 32 //+ ("&deg;F")
	document.getElementById("solutionCtoF").innerHTML= fahrenheit;

	if (celciusInput > 21) {
    document.body.style.backgroundColor = "red";
    document.body.style.backgroundImage = "none";

	}

	else if (celciusInput <= 21 && celciusInput > 5) {
	document.body.style.backgroundColor = "orange";	
	document.body.style.backgroundImage = "none";
	}

	else if (celciusInput <= 5) {
	document.body.style.backgroundColor= "blue"	
	document.body.style.backgroundImage = "none";
	}
}



document.getElementById("convertCtoF").onclick = tofahrenheit;