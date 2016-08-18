function bankAccount(accno,bal,name,amt){
      this.accno=accno;
      this.bal=bal;
      this.name=name;
 }
 
 function withdraw(){
    var accno=document.getElementById("accountno").value;
    var bal= document.getElementById("balance").value;
    var name=document.getElementById("name").value;
    var amt=document.getElementById("amount").value;
    var bn=new bankAccount(accno,bal,name,amt);
   bn.bal=parseInt(bn.bal)-parseInt(amt);
   document.getElementById("amount").value=0;
   document.getElementById("balance").value=bn.bal;
 }
 
 function deposit(){
   var accno=document.getElementById("accountno").value;
    var bal= document.getElementById("balance").value;
     var name=document.getElementById("name").value;
     var amt=document.getElementById("amount").value;
  var bn=new bankAccount(accno,bal,name,amt);
   bn.bal=parseInt(bn.bal)+parseInt(amt);
   document.getElementById("amount").value=0;
   document.getElementById("balance").value=bn.bal;
 }
     
