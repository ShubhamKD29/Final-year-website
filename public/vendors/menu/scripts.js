
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            const itemName = menuItem.querySelector('.item-name').textContent;
            const itemPrice = parseFloat(menuItem.querySelector('.item-price').textContent.replace('₹', ''));
            const itemQuantity = parseInt(menuItem.querySelector('.item-quantity').value);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} - ${itemQuantity} x ₹${itemPrice} = ₹${(itemPrice * itemQuantity).toFixed(2)}`;
            cartItems.appendChild(cartItem);

            totalPrice += itemPrice * itemQuantity;
            totalPriceElement.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout');
        // Add checkout functionality here
    });
});
// ----------------------------------------------------------- index.html text change -------------------------------------------------------
const sentences = [
    "Are you starving?",
    "QuickBitzz is here",
    "Meals made with l♥ve",
    "Discounts that delight."

];

let currentIndex = 0;
const sentenceElement = document.getElementById('sentence');

function changeSentence() {
    currentIndex = (currentIndex + 1) % sentences.length;
    sentenceElement.textContent = sentences[currentIndex];
}

// Change sentence every 3 seconds
setInterval(changeSentence, 3000);