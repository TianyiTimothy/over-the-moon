$(document).ready(function() {
//variables for the slide show and gift card form and also listener
	var createCustomButton = document.getElementById("custom_giftcard_button");
	var giftForm = document.getElementById("gift_form_fill");
	createCustomButton.onclick = showGiftcardForm;
//funtion to show the form
	function showGiftcardForm() {
		giftForm.style.display = "block";
		window.scrollBy(0, 500);
	} //end of showGiftcardForm function

//variables and funtion for displaying the custom amount field
	var customAmount = document.getElementById("segment_label_custom");
	var amountField = document.getElementById("custom_amount");
	customAmount.onclick = function() {
		amountField.style.display = "block";
	};

//to hide the custom amount field
	var giftCardAmount_50 = document.getElementById("giftCardAmount_50");
	var giftCardAmount_100 = document.getElementById("giftCardAmount_100");
	var giftCardAmount_150 = document.getElementById("giftCardAmount_150");
	var giftCardAmount_200 = document.getElementById("giftCardAmount_200");
	giftCardAmount_50.onclick = dontDisplayAmount;
	giftCardAmount_100.onclick = dontDisplayAmount;
	giftCardAmount_150.onclick = dontDisplayAmount;
	giftCardAmount_200.onclick = dontDisplayAmount;
//slide show funtionality
	var left_arrowDOM = document.getElementById("left_arrow");
	var right_arrowDOM = document.getElementById("right_arrow");
	var mainImgDOM = document.getElementById("mainImg");

	var slides = document.getElementsByClassName("slideImg");
	var slidesIndex = 0;

	left_arrowDOM.onclick = function() {

		if (slideIndex >= slides.length-1) {
			slideIndex = -1;
		}
		slideIndex += 1;
		$(".fade").hide();
		$(".fade:nth-of-type(" + slideIndex + ")").show();

	}

	right_arrowDOM.onclick = function() {
		if (slideIndex <= 1) {
			slideIndex = slides.length;
		}

		slideIndex -= 1;
		$(".fade").hide();
		$(".fade:nth-of-type(" + slideIndex + ")").show();

	}

	function dontDisplayAmount() {
		amountField.style.display = "none";

	}

//funtion for date picker and hide
	var calender = document.getElementById("datepicker");
	var pickADate = document.getElementById("pickADate");
	pickADate.onclick = function() {
		calender.style.display = "block";
	};

	function datepick() {
		calender.datepicker();
	}

	var sendInstantly = document.getElementById("sendInstantly");
	sendInstantly.onclick = function() {
		calender.style.display = "none";
	};


	//carousel move

	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		var i;
		var slides = document.getElementsByClassName("carousel_move");

		if (n > slides.length) {
			slideIndex = 1
		}
		if (n < 1) {
			slideIndex = slides.length
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}

		slides[slideIndex - 1].style.display = "block";

	}
	var formHandle = document.forms[0];
	formHandle.onsubmit = processForm;
	//getting the data to the local storage
	var recipientName = document.getElementById("Recipient_Name");
	var heading = document.getElementById("newMsgBox");

	recipientName.value = localStorage.getItem("name");
	if (localStorage.getItem("name") !== null) {
		heading.innerHTML = "Welcome " + localStorage.getItem("name");
	}

	Recipient_Name

	function processForm() {

		localStorage.setItem("name", recipientName.value);
		recipientName.value = localStorage.getItem("name");

	} //processForm end

	// submit button
	$("#button_submit").click(function() {

		// show inputs
		$("#wishes").text(" gift card");
		$("#recipientname").text(" "+$("#rninput").val());
		$("#recipientemail").text(" "+$("#reinput").val());
		$("#amount").text(" 5 CAD");
		$("#date").text(" "+"2019"+"-"+new Date().getMonth()+"-"+new Date().getDay());

		return false;
	});
	
	$('#button_confirm').click(function(){
		alert("We will send the respective gift card to the recipient email.")
	});

}) //page load end
