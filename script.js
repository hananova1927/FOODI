const orderButton = document.getElementById("hero-button-btn");
const orderForm = document.getElementById("order-form");

if (orderButton) {
    orderButton.addEventListener("click", function() {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

if (orderForm) {
    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = orderForm.querySelector('input[type="text"]').value.trim();
        const phoneInput = orderForm.querySelector('input[type="tel"]').value.trim();
        const messageBox = document.getElementById("message-input");

        if (nameInput === "" || phoneInput === "") {
            alert("Your input is incorrect, so please fill it correctly! ⚠️");
        } else {
            alert(`Thank you ${nameInput}! You ordered correctly and we will get you by your phone: ${phoneInput} 🍔🎉`);
            orderForm.reset();
        }
    });
}

const menuButtons = document.querySelectorAll(".menu-order-btn");
const messageBox = document.getElementById("message-input");

menuButtons.forEach(button => {
    button.addEventListener("click", function() {
        const selectedFood = this.getAttribute("data-food");
        if (messageBox) {
            messageBox.value = `I want to order: ${selectedFood} `;
        }
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});
