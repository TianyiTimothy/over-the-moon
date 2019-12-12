window.onload = pageLoad;

var i = 1;
var images = [];
var time = 3000;        //time gap of 3 sec

var imgContainer;
var member_data;

images[0] = 'img/img1.jpg';
images[1] = 'img/img2.jpg';
images[2] = 'img/img3.jpg';
images[3] = 'img/img4.jpg';
images[4] = 'img/img5.jpg';

function imageSlider(){
	imgContainer.src = images[i];
	// images will be displayed from 0 index to last index
	if(i<images.length-1){
		i++;
	}
	//after the last index reached the index will be set to 0 and loop will start again
	else{
		i = 0;
	}
}

function pageLoad(){

	imgContainer = document.getElementById("slide");
	imgContainer.src = images[0];
	//setInterval will execute imageSlider function after 3 seconds
	setInterval(imageSlider, time);
	
	$('.main_content').mouseover(function(){$(this).css('background','white')});
	$('.main_content').mouseout(function(){$(this).css('background','#ffcc00')});
    //display the paragraphs on clicking the div
	$('.team').click(function(){
	    $(this).find('.team_info').show();
	});
	//on mouseover hide the paragraphs
	$('.team').mouseover(function(){
		$(this).find('.team_info').hide();
	});
}
	



