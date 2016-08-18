function multiplication(){
	var no= document.getElementById("no").value;
	
	for (i = 1; i <= 10; i++) { 
		
		document.write(no + " * " + i +" = "+ no*i +"\n");
		
		
	}
	var bol=confirm("Do You want to continue:");
	if(bol==true){
		location.reload();
		document.getElementById("no").value = "";
		

		
	}
	else{
		   alert("Thanks!! Visit Again");
		   
	}
}