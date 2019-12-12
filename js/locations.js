window.onload= function(){
	var locBtn = document.getElementById("location_button");
	var locDtls = document.getElementById("location_details");
	locBtn.onclick =function(){locDtls.style.display= "block";};
	
	var locDtlsButton = document.getElementById("address_button");
	var reachThere = document.getElementById("reach_there");
	var contactUs = document.getElementById("reservation_id");
	locDtlsButton.onclick =function(){reachThere.style.display= "block";contactUs.style.display= "block";};
	
}