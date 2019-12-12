$(document).ready(
function pageReady(){
	var number =  Math.floor(Math.random()*100);
	$('#menu').hover(function(){
		$('.icon').css('transform','rotate('+number+'deg)'),
		$('.icon').css('marginTop','30px');},
		function(){
			$('.icon').css('transform','scaleY(1)'),
			$('.icon').css('marginTop','0');
	    }
	)

	var date = document.getElementById("special");
	var myDate = new Date();
	var onlyDate = myDate.toDateString();

	date.innerHTML = onlyDate+"</br>"+ "Today's Special is:"
	var days = myDate.getDay();
	//console.log(days);
	//array for weekdays
	var menu =["10% Discount","Brownie","Lemonade","Pan Cakes","Veggy Wrap","Cappuccino","Lentils Soup"];
	date.innerHTML += "<br>"+ menu[days];


	
	//var time  = setTimeout(rotate,2000);


});