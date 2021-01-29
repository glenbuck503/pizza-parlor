function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.orderPrice = function() {
  let orderTotal = 0;

  if (this.size === "8") {
    orderTotal += 8;
  } else if (this.size === "10") {
    orderTotal += 10;
  } else if (this.size === "12") {
    orderTotal += 12;
  }
  


 