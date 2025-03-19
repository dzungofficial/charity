// Shopping Cart Functionality
let cartCount = 0;
let cartItems = [];
let totalAmount = 0;

const cartIcon = document.querySelector('.cart-icon');
const cartCountElement = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartModal = document.querySelector('.cart-modal');
const cartItemsList = document.querySelector('.cart-items');
const cartTotalAmount = document.getElementById('cart-total-amount');
const checkoutBtn = document.querySelector('.checkout-btn');
const closeCartBtn = document.querySelector('.close-cart');

// Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));

        // Add item to cart
        cartItems.push({ product, price });
        cartCount++;
        totalAmount += price;

        // Update UI
        updateCartUI();
        alert(`Added ${product} to cart!`);
    });
});

// Update Cart UI
function updateCartUI() {
    // Update cart count
    cartCountElement.textContent = cartCount;

    // Update cart items list
    cartItemsList.innerHTML = '';
    cartItems.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item.product} - $${item.price.toFixed(2)}</span>
            <button class="remove-item" data-index="${index}">&times;</button>
        `;
        cartItemsList.appendChild(li);
    });

    // Update total amount
    cartTotalAmount.textContent = totalAmount.toFixed(2);
}

// Remove Item from Cart
cartItemsList.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index');
        const removedItem = cartItems.splice(index, 1)[0];
        cartCount--;
        totalAmount -= removedItem.price;
        updateCartUI();
    }
});

// Open Cart Modal
cartIcon.addEventListener('click', () => {
    cartModal.classList.add('active');
});

// Close Cart Modal
closeCartBtn.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

// Proceed to Checkout
checkoutBtn.addEventListener('click', () => {
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert(`Proceeding to checkout. Total amount: $${totalAmount.toFixed(2)}`);
        // Here you can redirect to a payment gateway or checkout page
    }
});