function primeNo(){
	var first= document.getElementById("no1").value;
    var second=document.getElementById("no2").value;
    var flag=1;
    
    for(i=first;i<=second;i++){
    	flag=1;
    	for(j=2; j<=i/2; j++){
    	   
    		if(i%j==0){
    			flag=0;
    		    break;
    		}
    	}
    	if(flag==1)
    		{
    		   document.write(i+" . ");
    		}
    	
    }
}