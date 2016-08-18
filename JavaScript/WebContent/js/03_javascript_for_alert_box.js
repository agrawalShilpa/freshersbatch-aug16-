
function divide()
{
     var first= document.getElementById("first").value;
     var second=document.getElementById("second").value;
      if (second==0)
       {alert("Invalid Value:zero");}
       else
         {
           var res=first/second;
           document.write("<b>THE RESULT OF DIVISION IS: </b> "+ res);
           }
         
}