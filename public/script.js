 function calcTotal(){
  var itemTotal=0;
  var adoptionFee = document.getElementById("item1");
  var leash = document.getElementById("item2");
  var crate = document.getElementById("item3");
  var collar = document.getElementById("item4");
  var food = document.getElementById("item5");
  var bed = document.getElementById("item6");
   
  //adds the value if the box is checked
  (adoptionFee.checked) ? (itemTotal+=350) : (itemTotal+=0);
  (leash.checked) ? (itemTotal+=15) : (itemTotal+=0);
  (crate.checked) ? (itemTotal+=75) : (itemTotal+=0);
  (collar.checked) ? (itemTotal+=10) : (itemTotal+=0);
  (food.checked) ? (itemTotal+=20) : (itemTotal+=0);
  (bed.checked) ? (itemTotal+=20) : (itemTotal+=0);
  //important variables
  var salesTaxRate=0.06;
  var subTotal= itemTotal; 
  var tax = itemTotal*salesTaxRate;
  var orderTotal= subTotal + tax ;
   //outputs variables
  alert ("Subtotal $" + subTotal.toFixed(2) + "\n" + "Tax $" + tax.toFixed(2) + "\n" + "Total $" + orderTotal.toFixed(2));
   
}
  
document.getElementById("submit").addEventListener("click", calcTotal, false);