// ID LIST : startButton, crystalBlue, crystalGreen, crystalPink, crystalRed
// mythicalNum, currentNum, wins, losses 

$(document).ready(function() {

	console.log("ready");

	var currentNum = 0;
	var mythicalNum = 0;
	var crystalBlue = 5;
	var crystalRed = 7;
	var crystalPink = 11;
	var crystalGreen = 13;
	var newNum = 0;

	$("#startButton").on("click", function() {
		 var mythicalNum = Math.floor((Math.random() * 1000) + 100);
		 document.getElementById('mythicalNum').innerHTML= mythicalNum;
		 document.getElementById('currentNum').innerHTML = currentNum;

		 $(".crystalBlue").on("click", function() {
			document.getElementById('currentNum').innerHTML = currentNum;
	})


	})

	//$(".crystalBlue").on("click", function() {
		//currentNum + crystalBlue;
	//	document.getElementById('currentNum').innerHTML = currentNum;
//	})



})