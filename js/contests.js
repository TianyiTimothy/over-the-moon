$(document).ready(function(){

	$('#head1').hover(function(){
		$(this).css('background-image','url("img/star_b.gif")');
	});
	$('.button2').click(function(){
		$('#form2').css('display','inline'),
		$('#form_1').css('display','none');
	});
	//1.  this is jquery part to change the css
	// $('.pic').click(function(){
	// 	i++,
	// 	$('#counter').html(i),
	// 	$(this).css('background-color','red');
	
	// });

	//2.. the another way to change the css..
	//this second method allow us to put the if statement
	var j = 0;
	var giftLock = document.getElementsByClassName("pic");
	var conutClicks = document.getElementById("counter");
	var fire = document.getElementById("contest");
	var alert = document.getElementById("count");
	var mathnumber= Math.floor(Math.random() * 10);
	// console.log(mathnumber);
	
	for(var i=0;i<giftLock.length; i++){
		giftLock[i].onclick = colorChange;
	}

	function colorChange(){
		this.style.backgroundColor ="red";
		j++;
		conutClicks.innerHTML = j;
		if(j>5){
			alert.style.color ="red";
			alert.innerHTML ="GAME OVER!!!!"
			alert.innerHTML += "<br/>" + "You can not make more than 5 clicks";
			this.style.backgroundColor ="grey";
			giftLock[mathnumber].innerHTML = '<i class="fas fa-key" aria-hidden="true"></i>'; 

			//window.stop();
		}	
	}

});//end of ready function.

