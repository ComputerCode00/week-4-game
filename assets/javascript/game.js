
var targetNumber = 18;

$("#randomNumber").text(targetNumber);


var counter = 0;

var numberOptions = [6, 3];
var increment = numberOptions[Math.round(Math.random())];


$(".crystal-image1, .crystal-image3, .crystal-image4").on("click", function() {
	

counter += increment;

alert("Your new score is " + counter);


if (counter === targetNumber) {
	alert("You WIN!!!");
}

	else if (counter >= targetNumber) {
		alert("You LOST!!!");
	}
});

$(".crystal-image2").on("click", function() {
	alert("Bad Apple");
})