//Using the shoppingCart variable, create a function that takes the shoppingCart variable and returns the total cost of both items as the total variable.
var shoppingCart = [20, 15];

function getTotalCost(prices){
  let total = 0;
  // code below
total = prices.reduce((total, amount) => total + amount);
  // code above
  return total;
}

getTotalCost(shoppingCart);