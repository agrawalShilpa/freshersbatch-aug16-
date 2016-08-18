var i=1;
function check(){
    
	var name= new String(document.getElementById("uname").value);
    var pwd=new String(document.getElementById("pwd").value);
     if(name.localeCompare(pwd)==0){
    	    
    	 alert("Correct User Name and Password");
   }
     else{
    	 
          if(i==4){
        	  document.write("YOU CANNOT LOGIN");
          }	 
          else{
        	  i++;
        	  alert("Enter correct user name and pwd");
        	  document.getElementById("uname").value = "";
        	  document.getElementById("pwd").value = "";
        	  
          }
     }
}