function caluclate(){
	var sen= document.getElementById("sentence").value;
	var ch;
	var a=0;i=0,e=0,o=0,u=0;
	 for(j=0;j<sen.length;j++){
		ch=sen.charAt(j);
		switch(ch){
		case 'a': a++;
		   break;
		case 'e': e++;
		   break;
		case 'i': i++;
		   break;
		case 'o': o++;
		   break;
		case 'u': u++;
		   
	}
		
   }
	 document.write("a="+ a +";"+"e="+ e +";"+"i="+ i +";"+"o="+ o +";"+"u="+ u +";")
}