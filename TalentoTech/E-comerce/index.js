// Definición de productos
const products = [
    { id: 1, name: 'Camiseta Básica', price: 25.000, image: 'Imagenes/Camisa-Blanca.webp' },
    { id: 2, name: 'Jeans Slim Fit', price: 155.000, image: 'Imagenes/Jeans-Slim-Fit.webp' },
    { id: 3, name: 'Chaleco Oversize', price: 80.000, image: 'Imagenes/chaleco-oversize.webp' },
    { id: 4, name: 'Bermuda cargo', price: 60.000, image: 'Imagenes/Bermuda-cargo.webp' },
    { id: 5, name: 'Cargo negro', price: 100.000, image: 'Imagenes/cargo.webp'},
    { id: 6, name: 'Bermuda Cargo', price: 60.000, image: 'Imagenes/Bermuda-cargo.webp'},
    { id: 7, name: 'Camisilla Basica', price: 35.000, image: 'Imagenes/camisilla.webp'},
    { id: 8, name: 'Sudadera Urbans', price: 115.000, image: 'Imagenes/sudadera.webp'},
];

// Carrito de compras
let cart = [];

// Función para renderizar los productos
function renderProducts() {
    const container = document.querySelector('.product-cards');
    container.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p>Precio: $${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Agregar al carrito</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
}

// Función para actualizar el carrito
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartCount.textContent = cart.length;
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });
    totalPrice.textContent = total.toFixed(2);
}

// Función para mostrar u ocultar el carrito
function toggleCart() {
    const cartModal = document.getElementById('cart');
    cartModal.classList.toggle('active');
}

// Evento para cargar los productos al cargar la página
document.addEventListener('DOMContentLoaded', renderProducts);
// Función para mostrar la notificación
function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notification-message');
    notificationMessage.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // La notificación desaparecerá después de 3 segundos
}

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(p => p.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCart();
    showNotification(`${product.name} agregado al carrito`);
}
