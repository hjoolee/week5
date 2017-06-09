
// CONVERSION FUNCTION STARTS HERE
var inputFtoC;
var inputCtoF;

function calculateTotalFtoC() {
	inputFtoC = document.getElementById("inputFtoC").value;
	var total = (inputFtoC - 32) * 5 / 9 + " &deg;C";
	document.getElementById("solutionFtoC").innerHTML = total;

if (inputFtoC > 70) {
	document.getElementById("circleF").style.backgroundColor = "#ff8466";
}

else {
	document.getElementById("circleF").style.backgroundColor = "#47efd6";

}

if (inputFtoC < 32) {
	document.getElementById("circleF").style.backgroundColor = "#4174c6";

}


}

function calculateTotalCtoF(){ 
	inputCtoF = document.getElementById("inputCtoF").value;
	var total = (inputCtoF * 9) / 5 + 32 + " &deg;F";
	document.getElementById("solutionCtoF").innerHTML = total;

if (inputCtoF > 20) {
	document.getElementById("circleC").style.backgroundColor = "#ff8466";
}

else {
	document.getElementById("circleC").style.backgroundColor = "#47efd6";

}

if (inputCtoF < 0) {
	document.getElementById("circleC").style.backgroundColor = "#4174c6";

}
	

}



document.getElementById("convertFtoC").onclick = calculateTotalFtoC;
document.getElementById("convertCtoF").onclick = calculateTotalCtoF;

// CONVERSION FUNCTION ENDS HERE


