
function CalculateAge()
{
  var d = new Date();
  var n = d.getFullYear();
  var age=document.getElementById("age").value;
  var year= n-age;
  document.write("Your Birth Year is ="+ year);
}