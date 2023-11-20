function calculateTax(){
    var round = Math.round;
    var total = round(prompt("Enter the total amount: "));
    var taxRate = round(prompt("Enter the tax rate: "));
     if(isNaN(total) || isNaN(taxRate)){
        console.log("Enter number only.");
         return;
     }

     function calculation(){
         console.log((total*taxRate)/100);
      return;
     }

    return calculation();

}

console.log(calculateTax());
