function sandwichCalculator(slicesOfBread, slicesOfCheese){
   if (slicesOfBread > 1 && slicesOfCheese > 0) {
        if (slicesOfCheese < slicesOfBread/2){
            let sandwiches = slicesOfCheese
            return sandwiches
        }else {
            let sandwiches = slicesOfBread/2;
            return sandwiches
        }
   }else {
       let sandwiches = "You don't have enough."
       return sandwiches
   }
}

console.log(sandwichCalculator(1,1)); 