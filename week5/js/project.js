var inputCtoF;
var inputFtoC;

/* MORE CODE AUDIO FAILURE
var audioElement;


var audioElement = document.createElement("woodthrush");
audioElement.setAttribute("woodthrush.mp3", "woodthrush.ogg");
audioElement.load()
audioElement.addEventListener("load");
 function() {
audioElement.play();
}, true;
*/

function calculateFtoC() {
 inputFtoC = document.getElementById("inputFtoC").value;
 var total = (inputFtoC - 32) * 5 / 9 + " &deg;C";
 document.getElementById("solutionFtoC").innerHTML = total;
}


 function calculateCtoF(){ 
 inputCtoF = document.getElementById("inputCtoF").value;
 var total = (inputCtoF * 9) / 5 + 32 + " &deg;F";
 document.getElementById("solutionCtoF").innerHTML = total;
}

document.getElementById("convertFtoC").onclick = calculateFtoC;
document.getElementById("convertCtoF").onclick = calculateCtoF;



 /* trying to get that audio file to play
 function playMusic(){
  music.play();
  }
document.getElementById("WoodThrush").play();
*/




/* this was first attempt at convertor code
function convert(degree) {
    var x;
    if (degree == "C") {
        x = document.getElementById("inputCtoF").value * 9 / 5 + 32;
        document.getElementById("solutionCtoF").value = Math.round(x);
    } else {
        x = (document.getElementById("inputFtoC").value -32) * 5 / 9;
        document.getElementById("solutionFtoC").value = Math.round(x);
    }
}
*/