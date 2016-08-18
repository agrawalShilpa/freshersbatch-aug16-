
var no=[10,36,2,7,100];
function asec(){
	no.sort(function(a, b){return a-b});
	document.getElementById("demo").innerHTML = no;
	
	
}
function dsec(){
	no.sort(function(a, b){return b-a});
	document.getElementById("demo").innerHTML = no;
}

