document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartItemsList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartItems = [];

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            const productName = product.querySelector(".product-name").textContent;
            const productPrice = parseFloat(product.querySelector(".product-price").textContent.replace("$", ""));

            const newItem = {
                name: productName,
                price: productPrice,
            };

            cartItems.push(newItem);
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = "";
        let total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", () => {
                cartItems.splice(i, 1);
                updateCart();
            });

            listItem.appendChild(removeButton);
            cartItemsList.appendChild(listItem);

            total += item.price;
        }

        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
});
