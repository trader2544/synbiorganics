document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".product-button");
    
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            const productPrice = parseFloat(this.getAttribute("data-product-price"));
            const productName = this.closest(".product").querySelector("h2").textContent;
            const productImage = this.closest(".product").querySelector("img").src;
            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingProduct = cart.find(item => item.id === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1, image: productImage });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Product added to cart");
        });
    });
});
