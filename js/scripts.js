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

  for (let i=0; i <this.toppings.length; i++) {
    orderTotal +=1;
  }
  return orderTotal;
};

$(document).ready(function() {
  $("form#userOrder").submit(function(event) {
    event.preventDefault();

    let userSize = $("select#size").val();
    let toppings = [];
    $("input:checkbox[name=toppings]:cehcked").each(function(){
      toppings.push($(this).val());
    });








  });
});



