window.onload = function(){
	
	var formHandle = document.forms[0];
	formHandle.onsubmit = processForm;
	
	function processForm(){
		
		//access the html elements
		var fName = document.forms[0].firstName.value;
		var lName = document.forms[0].lastName.value;
		var emailId = document.forms[0].email.value;
		var phoneNo = document.forms[0].number.value;
		var msg = document.forms[0].message.value;
		var submitForm = document.getElementById("submit");
		
		//define the regex strings for email and phone 
		var emailRegex = /^\w+@\w+.(com|org|net)$/i;
		var phoneRegex = /^\d{3}\s?\d{3}\s?\d{4}$/;
		
		//condition to check that first name should not be empty or null 
		if(fName === "" || fName === null){
			errorFN = document.getElementById("errorFName");
		    errorFN.style.display="inline";
			fNameInput = document.forms[0].firstName;
			fNameInput.focus();
			return false;
		}
	    //condition to check that last name should not be empty or null 
	    else if(lName === "" || lName === null){
			errorLN = document.getElementById("errorLName");
		    errorLN.style.display="inline";
			lNameInput = document.forms[0].lastName;
			lNameInput.focus();
			return false;
		}
	    //condition to check that email should not be empty or null or it should match the regex
		else if(emailId === "" || emailId === null || !emailRegex.test(emailId)){
			errorMail = document.getElementById("errorEmail");
		    errorMail.style.display="inline";
			emailInput = document.forms[0].email;
			emailInput.focus();
			return false;
		}
		//condition to check that phone should not be empty or null or it should match the regex
		else if(phoneNo === "" || phoneNo === null || !phoneRegex.test(phoneNo)){
			errorPhn = document.getElementById("errorPhone");
		    errorPhn.style.display="inline";
			phoneInput = document.forms[0].number;
			phoneInput.focus();
			return false;
		}
		//condition to check that message should not be empty or null
		else if(msg === "" || msg === null){
			errorMsg = document.getElementById("errorMessage");
		    errorMsg.style.display="inline";
			msgInput = document.forms[0].message;
			msgInput.focus();
			return false;
		}
		// if everything pass the validation then thanks message will be displayed
		else {
			foRM = document.getElementById("contactForm");
			foRM.style.display = "none";
			heading = document.getElementById("heading");
			heading.style.display = "none";
			thankYouMsg = document.getElementById("thanks_msg");
			thankYouMsg.style.display="inline";
			var cName = document.getElementById("thanksClient");
			cName.innerText = fName;
		}
		return false;
	}
}













