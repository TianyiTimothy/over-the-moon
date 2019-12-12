$(document).ready(function() {
	// hide thanks msg
	$("#thanks_msg").hide();

	// show thanks msg after sunmitting
	$("#button_submit").click(function() {
		// make sure inputs are right
		if ($("#firstName").val() == "") {
			$(".error").hide(300);
			$("#errorFName").show(300);
			return false;
		}else if ($("#lastName").val() == "") {
			$(".error").hide(300);
			$("#errorLName").show(300);
			return false;
		}else if ($("#email").val() == "") {
			$(".error").hide(300);
			$("#errorEmail").show(300);
			return false;
		}else if ($("#number").val() == "") {
			$(".error").hide(300);
			$("#errorPhone").show(300);
			return false;
		}else if ($("#companyName").val() == "") {
			$(".error").hide(300);
			$("#errorCompanyName").show(300);
			return false;
		}else if ($("#eventName").val() == "") {
			$(".error").hide(300);
			$("#errorEventName").show(300);
			return false;
		}else if ($("#event_dropDown").val() == "") {
			$(".error").hide(300);
			$("#event_dropDown").show(300);
			return false;
		}else if ($("#description").val() == "") {
			$(".error").hide(300);
			$("#errorMessage").show(300);
			return false;
		}
		$(".error").hide(300);
		$("#thanks_msg").show(300);
	});

	function jumpToEvent() {
		// for some reason, href="#xx" is not working. so we need this function
		var H = $("#events").offset().top;
		$("body").animate({
			"scrollTop": H
		}, 800);
	}

	function jumpToBooking() {
		// for some reason, href="#xx" is not working. so we need this function
		var H = $("#booking").offset().top;
		$("body").animate({
			"scrollTop": H
		}, 800);
	}

	$("#button_event").click(jumpToEvent);
	$("#button_booking").click(jumpToBooking);

});
