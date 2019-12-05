/*Melissa Jamma*/
$(document).ready(function(){
	//move focus to first textbox
	$("#name").focus();
	
	$("#newsletter_signup").submit(
	function(event) {
		var isValid = true;
		
		
		//validate name
		var Name = $("#name").val().trim();
		if(Name == "") {
			$("#name").next().text("This field is required.");
			isValid = false;
		}else{
			$("#name").next().text("");
		}
		$("#name").val(Name);
		
		//validate Email Address
		var emailPattern = /\b[A-Za-z0-0._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var email = $("#email").val().trim();
		if(email == ""){
			$("#email").next().text("This field is required.");
			isValid = false;
		}
		else if(!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid address.")
			isValid = false;
		}
		else{
		$("#email").next().text("");}
		$("#email").val(email);
	
	if (isValid == false) {event.preventDefault();}

	
}//end function
);//end submit
}); //end ready

		