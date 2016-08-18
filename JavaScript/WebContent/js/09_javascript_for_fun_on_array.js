function check(){
	var no = [2,56,78,12,4];
	var total=0,avg=0;
	var max=Math.max.apply(null, no);
	var min=Math.min.apply(null, no);
	document.write("Max is"+max);
	document.write("Min is"+min);
	for(i=0; i<no.length;i++){
		total=total+no[i];
	}
	
	avg=total/(no.length);
	document.write("total is"+total);
	document.write("average is"+ avg);
}