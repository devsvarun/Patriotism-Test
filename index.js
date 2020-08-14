var count = 0;
var num = 200;
var direct = ["left", "right"];

$("#q1a").click(function() {
    $("#q1b").addClass("clicked");
    $("#q1b").removeClass("options");
})
$("#q2a").click(function() {
    $("#q2b").addClass("clicked");
    $("#q2b").removeClass("options");
})
$("#q3a").click(function() {
    $("#q3b").addClass("clicked");
    $("#q3b").removeClass("options");
})
$("#q4a").click(function() {
    $("#q4b").addClass("clicked");
    $("#q4b").removeClass("options");
})
$("#q5a").click(function() {
    $("#q5b").addClass("clicked");
    $("#q5b").removeClass("options");
})



$("#q1b").click(function() {
    $("#q1b").addClass("clicked");
    $("#q1b").removeClass("options");
})
$("#q2b").click(function() {
    $("#q2b").addClass("clicked");
    $("#q2b").removeClass("options");
})
$("#q3b").click(function() {
    $("#q3b").addClass("clicked");
    $("#q3b").removeClass("options");
})
$("#q4b").click(function() {
    $("#q4b").addClass("clicked");
    $("#q4b").removeClass("options");
})
$("#q5b").click(function() {
    $("#q5b").addClass("clicked");
    $("#q5b").removeClass("options");
})



$("button").mouseover(function(){
	if(count<5)
	{
		randNum = Math.floor(Math.random()*2);
		$("button").css("margin-"+direct[randNum],num+"px");
		console.log(direct[randNum]);	
	}
	count++;
	num+=100;
})
	

