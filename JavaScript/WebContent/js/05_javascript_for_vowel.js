function vowel(){
	var alpha=document.getElementById("alpha").value;
	 if(alpha=="a"||alpha=="e"||alpha=="i"||alpha=="o"||alpha=="u"){
		 document.write("You entered a vowel:  "+alpha)
	 }
	 else{
		 document.write("Not a Vowel:  "+alpha)
	 }
}