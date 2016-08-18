function validate()   
{
	var email=document.getElementById("mail").value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
	if(email.match(mailformat))  
	{  
		alert("Correct email address!");
	return true;  
	}  
	else  
	{  
	alert("You have entered an invalid email address!");  
	
	return false;  
	}
} 