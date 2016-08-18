function factorial(){
	var no= document.getElementById("no").value;
	var x=1;
	 while(no>1){
		 
		 x=x*no;
		 no=no-1;
	 }
	 document.write(x);
}