// ID LIST : startButton, crystalBlue, crystalGreen, crystalPink, crystalRed
// mythicalNum, currentNum, wins, losses 


window.onload=function(){
	$('.crystalBlue').click(crystals.blueClick);
	$('.crystalRed').click(crystals.redClick);
	$('.crystalPink').click(crystals.pinkClick);
	$('.crystalGreen').click(crystals.greenClick);
};

var wins = 0;
var losses = 0;
var mythicalNum = 0;
var currentNum = 0;
	
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
						}
					};

$("#checkButton").on("click", function() {
		if (currentNum < mythicalNum){
			alert("keep going!");
			}
		else if(currentNum > mythicalNum){
			losses++;
			$("#losses").html(losses);
			}
		else if(currentNum == mythicalNum){
			wins++;
			$("#wins").html(wins);
 			}
 		else{
			console.log("why isn't this working");
			};
	});	

$("#startButton").on("click", function() {
	 	 mythicalNum = Math.floor((Math.random() * 269) + 169);
		 $("#mythicalNum").html(mythicalNum);
		 currentNum = 0;
		 $("#currentNum").html(currentNum);
});		

$("#resetButton").on("click", function() {
		currentNum = 0;
		mythicalNum = 0;
		$("#mythicalNum").html("0");
		$("#currentNum").html("0");
}); 


						
    

	