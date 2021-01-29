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
    
    $(".pizzaPic").hide()
    $("#orderPrice").show()
    $("#total").html("The total cost for your order is:   $" + total + " . ");
    $("#delivery").show()
    
  });
  
  $("form#contact").submit(function(event) {
    event.preventDefault();

    let userName = $("input#userName").val();
    let userPhone = $("input#userPhone").val();
    let userAdd = $("input#userAdd").val();

    $("#delivery").hide()
    $(".size").hide()
    $(".toppings").hide()
    $(".pizzaPic").hide()
    $("#fullOrder").show()
    $("#orderPrice").show()
    $(".thanks").show()
    

    $("#fullOrder").html("Thank you " + userName + ". We will be delivering your pizza to " + userAdd + ". We will call you at " + userPhone + " if we have any issues with your order. Thank you!");
    
    

  });
});



