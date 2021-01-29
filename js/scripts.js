function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.orderPrice = function() {
  let orderTotal = 0;

  if (this.size === "small") {
    orderTotal += 8;
  } else if (this.size === "medium") {
    orderTotal += 10;
  } else if (this.size === "large") {
    orderTotal += 12;
  } else {
    orderTotal = 0;
  }

  for (let i=0; i < this.toppings.length; i++) {
    orderTotal +=1;
  }
  return orderTotal;
  
};

$(document).ready(function() {
  $("form#userOrder").submit(function(event) {
    event.preventDefault();

    let size = $("select#size").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });
    let custPizza = new Pizza (size, toppings);
    let total = custPizza.orderPrice();
    let pizzas = [];
    
    $("#orderPrice").show()
    $("#total").html("The total cost for your order is:   $" + total + " . Thank you! Hope you enjoy!");
    $(pizzas.push(custPizza));
  });
});



