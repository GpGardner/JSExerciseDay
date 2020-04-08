const pizzaToppings = ['peps', 'cheese', 'ham', 'onions'];

function pizzafy (pizzaToppings){
    return 'A delicious pizza with ' + pizzaToppings.join(' and ');
}

console.log(pizzafy(pizzaToppings));