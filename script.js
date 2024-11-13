
const urlParams = new URLSearchParams(window.location.search);


const productName = urlParams.get('product');
const productImage = urlParams.get('image');
const rating = urlParams.get('rating');
const time = urlParams.get('time');
const price = urlParams.get('price');


document.getElementById('product-name').textContent = productName;
document.getElementById('product-image').src = productImage;  
document.getElementById('rating-value').textContent = rating;
document.getElementById('delivery-time').textContent = time;
document.getElementById('description').textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed turpis sit amet elit tempor posuere.';
document.getElementById('quantity-image').src = productImage;  
document.getElementById('product-price').textContent = `$${price}`;




