// script.js

// Remove button action
document.querySelector('.remove-btn').addEventListener('click', function() {
    document.querySelector('.product-card').style.display = 'none';
    document.querySelector('.order-summary').innerHTML = `
        <h3>Order Summary</h3>
        <div class="total-row">
            <span>Original Price</span>
            <span>₹0.00</span>
        </div>
        <div class="total-row">
            <span>Total</span>
            <span>₹0.00</span>
        </div>
        <button class="checkout-btn" disabled>Checkout</button>
        <p class="empty-cart">Your cart is empty.</p>
    `;
});

// Wishlist button action
document.querySelector('.wishlist-btn').addEventListener('click', function() {
    alert('Moved to wishlist!');
});

// EMI options action
document.querySelector('.emi-options').addEventListener('click', function() {
    alert('EMI options are available for qualified buyers.');
});

// Checkout button action
document.querySelector('.checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
    document.querySelector('.subscribe-form').addEventListener('submit', function(e){
  const email = this.querySelector('input[type="email"]').value;
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});
});