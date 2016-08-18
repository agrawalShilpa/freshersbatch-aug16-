function calculate(){
	var length=0;
	var word=document.getElementById("word").value;
	for(i=0;i<word.length;i++){
		if(word.charAt(i)!=" ")
			{length++;}
	}
	document.write("length is "+ length);
}
