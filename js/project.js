var f;
var c;


// function inputFtoC(degree) {
	// 
	// document.getElementById("solution").innerHTML = C;
function convert(degree) {
	 var inputFtoC = (degree - 32) / 1.8;
	 document.getElementById("solutionFtoC").innerHTML = convert(degree);
}

document.getElementById("Convert").onclick = degree;



// when F is entered C should be calculated