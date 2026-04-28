// script.js: Main JavaScript Logic

// Sample product data (simulating a database)
const products = [
  {
    id: 101,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    description: "Bluetooth, noise-cancelling",
    image: "images/headphones.jpg"
  },
  {
    id: 102,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 89.99,
    description: "Heart rate, sleep tracking",
    image: "images/fitnesswatch.jpg"
  },
  {
    id: 103,
    name: "Classic T-Shirt",
    category: "Apparel",
    price: 19.99,
    description: "100% cotton, unisex",
    image: "images/tshirt.jpg"
  },
  {
    id: 104,
    name: "Denim Jeans",
    category: "Apparel",
    price: 39.99,
    description: "Slim fit, various sizes",
    image: "images/jeans.jpg"
  },
  {
    id: 105,
    name: "Leather Wallet",
    category: "Accessories",
    price: 24.99,
    description: "RFID-blocking, genuine leather",
    image: "images/wallet.jpg"
  },
  {
    id: 106,
    name: "Canvas Backpack",
    category: "Accessories",
    price: 49.99,
    description: "Water-resistant, 15\" laptop pocket",
    image: "images/backpack.jpg"
  }
];

// Render featured products on homepage
document.addEventListener('DOMContentLoaded', () => {
  const featuredProducts = document.getElementById('featuredProducts');
  if (featuredProducts) {
    // Show first 4 products as featured
    products.slice(0, 4).forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <div class="price">$${product.price.toFixed(2)}</div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      featuredProducts.appendChild(card);
    });
  }

  // Add event listeners for Add to Cart buttons
  document.body.addEventListener('click', function(e) {
    if (e.target.classList.contains('add-to-cart')) {
      const productId = parseInt(e.target.getAttribute('data-id'));
      addToCart(productId);
      alert('Product added to cart!');
    }
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

// Add product to cart (using localStorage)
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Example form validation for contact form
function validateContactForm() {
  const name = document.getElementById('contactName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const message = document.getElementById('contactMessage').value.trim();
  let valid = true;
  let errorMsg = '';

  if (!name) {
    errorMsg += 'Name is required.\n';
    valid = false;
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorMsg += 'Valid email is required.\n';
    valid = false;
  }
  if (!message) {
    errorMsg += 'Message cannot be empty.\n';
    valid = false;
  }
  if (!valid) {
    alert(errorMsg);
  }
  return valid;
}
