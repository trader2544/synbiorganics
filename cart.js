document.addEventListener("DOMContentLoaded", function() {
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h2>${item.name}</h2>
                    <p>Quantity: ${item.quantity}</p>
                    <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="cart-item-remove" data-product-id="${item.id}">Remove</button>
                </div>
            `;

            cartItemsContainer.appendChild(itemElement);

            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);

        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll(".cart-item-remove");
        removeButtons.forEach(button => {
            button.addEventListener("click", function() {
                const productId = this.getAttribute("data-product-id");
                cart = cart.filter(item => item.id !== productId);
                localStorage.setItem("cart", JSON.stringify(cart));
                // Update the cart display
                updateCart();
            });
        });
    }

    function updateCart() {
        cartItemsContainer.innerHTML = ""; // Clear existing items

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            cartTotalElement.textContent = "0.00";
        } else {
            total = 0;
            cart.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("cart-item");
                
                itemElement.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h2>${item.name}</h2>
                        <p>Quantity: ${item.quantity}</p>
                        <p class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                        <button class="cart-item-remove" data-product-id="${item.id}">Remove</button>
                    </div>
                `;

                cartItemsContainer.appendChild(itemElement);

                total += item.price * item.quantity;
            });

            cartTotalElement.textContent = total.toFixed(2);
        }
    }
});
