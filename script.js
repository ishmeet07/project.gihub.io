

var buyButtons = document.getElementsByClassName("buyButton");


for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default button behavior

    var product = this.parentNode;
    var productName = product.querySelector("h3").innerText;

      
    alert("Thank you for buying " + productName + "!");
  });
}

var contactForm = document.querySelector("form");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value;
  var email = emailInput.value;
  var message = messageInput.value;

 
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return; 
  }


  alert("Thank you, " + name + "! Your message has been sent.");

  
  contactForm.reset();
});
