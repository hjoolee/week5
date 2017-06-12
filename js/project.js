var inputFtoC;
var inputCtoF;

// (50°F - 32) x .5556 = 10°C
// 30°C x 1.8 + 32 = 86°F

function calculateFtoC() {
  inputFtoC = document.getElementById("inputFtoC").value;
  document.getElementById("solutionFtoC").innerHTML = (inputFtoC-32)/1.8 + "&deg;C";
}

function calculateCtoF() {
  inputCtoF = document.getElementById("inputCtoF").value;
  document.getElementById("solutionCtoF").innerHTML = inputCtoF * 1.8 + 32 + "&deg;F";
}

document.getElementById("convertFtoC").onclick = calculateFtoC;
document.getElementById("convertCtoF").onclick = calculateCtoF;