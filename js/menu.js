$(document).ready(function() {
	$('.ul').hide();
	$(".menu").find("div").click(function() {
		$(".menu").find("div").css("height", "250px");
		//$(".menu").css("background","black");
		$(this).css("height", "auto");
		$(this).find('.ul').show(3000);

	});
	$('h2').mouseover(function() {
		$('.ul').hide();
		//$(".menu").css("background","black");
	});
});
