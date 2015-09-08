// Problem: No user interactivity 
// Solution: On UI, change appropriately

var color = $(".selected").css("background-color"); 
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on control list items 
$(".controls").on("click", "li", function(){
	//Deselect sibling elements 
	$(this).siblings().removeClass("selected");
	// Select clicked element 
	$(this).addClass("selected");
	//cache current color 
	color = $(this).css("background-color");

});

// update the new color span 
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b = $("#blue").val();
	$("#newColor").css("background-color", "rgba (" + r + "," + g + "," + b + ", 0.40)");

};

// when "new color" button is pressed 
$("#revealColorSelect").click(function(){
	changeColor();
	// show color select or hide the color select
	$("#colorSelect").toggle();
});


//when color sliders change 
$("input[type=range]").change(changeColor);

// When add color is pressed 
$("#addNewColor").click(function() {
	//Append the color to the controls <ul>
	var $newColor = $("<li></li>");
	$newColor.css("background-color", $("#newColor").css("background-color"));
	$(".controls ul").append($newColor);
	// Select the new color 
	$newColor.click();

});


//On mouse events on the canvas 
$canvas.mousedown(function (e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e) {
	//Draw lines
	if (mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.lineWidth = 10;
		context.stroke();
		lastEvent = e;
	};
}).mouseUp(function () {
	mouseDown = false;
}).mouseLeave(function () {
	$canvas.mouseUp();
});
	
	












