function palindrome(){
	var word= document.getElementById("word").value;
	var reverse="";
	var flag=0;
	 for(i=word.length-1;i>=0;i--){
		 reverse=reverse+word.charAt(i);
		
		 }
	 if(word.localeCompare(reverse)==0)
		 document.write("String is a palindrome");
	 else
		 document.write("String is not a palindrome");
 
	 for(j=0;j<word.length;j++){
	 if((word.charAt(j)=="a")||(word.charAt(j)=="e")||(word.charAt(j)=="i")||(word.charAt(j)=="o")||(word.charAt(j)=="u")){
		 flag=1;
		 document.write("Sentence is not a consonant");
		 break;
	 }
  }
 if(flag==0)
	 document.write("Sentence is a consonant");
 
	
 }