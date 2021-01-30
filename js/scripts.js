function Orders() {
  this.orders = {};
  this.currentId = 0;
}

Orders.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.orders[pizza.id] = pizza;

}
Orders.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Pizza(size,toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.Order = function() {
  return this.size + " " + this.toppings;
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

function num() {
  let randomNum = Math.floor(Math.random() * 108567);
  return randomNum;
}

let newPizza = new Orders();
$(document).ready(function() {
  $("form#userOrder").submit(function(event) {
    event.preventDefault();

    let size = $("select#size").val();
    let toppings = [];
    let pizzas = []

    $("input:checkbox[name=toppings]:checked").each(function(){
      toppings.push($(this).val());
    });

    let custPizza = new Pizza (size, toppings);
    let total = custPizza.orderPrice();
    let orderNum = num();
    pizzas.push(custPizza);

    $(".pizzaPic").hide();
    $("#toppings").show();
    $(".pizzaGif1").hide();
    $("#orderPrice").show();
    $("#sizeDetails").html("Size: " + size);
    $("#toppingsDetails").html("Toppings: " + toppings.join(" + "));
    $("#orderNumber").html("Order number: " + orderNum);
    $("#total").html("The total cost for your order is: " + "$" + total);
    $("#delivery").show();
    $("form#userOrder")[0].reset();

    $("button#orderButton2").click(function(event) {
      event.preventDefault();
      let size = $("select#size").val();
      let toppings = [];
      $("form#userOrder")[0].reset();
      $("#toppings").show();
      $(".pizzaGif1").hide();
      $(".size").show();

      
      $("input:checkbox[name=toppings]:checked").each(function(){
        toppings.push($(this).val());
      });
      let custPizza2 = new Pizza (size, toppings);
      newPizza.addPizza(custPizza2);
      let total2 = custPizza2.orderPrice();
      let value = total2 + total;

      
      pizzas.push(custPizza2);
      $("#total").html("The total cost for your order is: " + "$" + value);
      console.log(pizzas);

      
    });
  });
  
  $("form#contact").submit(function(event) {
    event.preventDefault();

    let userName = $("input#userName").val();
    let userPhone = $("input#userPhone").val();
    let userAdd = $("input#userAdd").val();
    $("#delivery").hide();
    $(".size").hide();
    $(".pizzaGif1").hide();
    $(".toppings").hide();
    $(".pizzaPic").hide();
    $(".pizzaGif2").show();
    $("#fullOrder").show();
    $("#orderPrice").show();
    $("#fullOrder").html("Thank you " + userName + ".We will be delivering your pizza to " + userAdd + ".We will call you at " + "(" +userPhone + ")" + " if we have any issues with your order. Thank you!");
  });
});






