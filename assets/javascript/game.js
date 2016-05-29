// ID LIST : startButton, crystalBlue, crystalGreen, crystalPink, crystalRed
// mythicalNum, currentNum, wins, losses 


window.onload=function(){
	$('.crystalBlue').click(crystals.blueClick);
	$('.crystalRed').click(crystals.redClick);
	$('.crystalPink').click(crystals.pinkClick);
	$('.crystalGreen').click(crystals.greenClick);
};

$("#startButton").on("click", function() {
	 	 var mythicalNum = Math.floor((Math.random() * 269) + 169);
		 $("#mythicalNum").html(mythicalNum);
		 $("#currentNum").html(currentNum);
});		

$("#resetButton").on("click", function() {
		$("#mythicalNum").html("0");
		$("#currentNum").html("0");
}); 
	var currentNum = 0;
	var wins = 0;
	var losses = 0;
	var crystals = {

						blueClick: function(){
							currentNum += 5;
							$("#currentNum").html(currentNum);
						},

						redClick: function(){
							currentNum += 7;
							$("#currentNum").html(currentNum);
						},

						pinkClick: function(){
							currentNum += 11;
							$("#currentNum").html(currentNum);
						},

						greenClick: function(){
							currentNum += 13;
							$("#currentNum").html(currentNum);
						},
					};

						if (currentNum < mythicalNum){
							console.log("keep going");
							}
						else if(currentNum > mythicalNum){
							losses++;
							$("#losses").html(losses);
							}
						else{
							console.log("what");
					};
	