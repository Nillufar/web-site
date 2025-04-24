const cartItems = [
    { id: 1, name: 'Pink Hoodie', price: 49.99, quantity: 1 },
    { id: 2, name: 'Denim Jacket', price: 79.99, quantity: 1 },
  ];
  
  function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    let total = 0;
  
    cartItems.forEach(item => {
      total += item.price * item.quantity;
  
      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
  
      itemElement.innerHTML = `
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-price">$${item.price.toFixed(2)}</div>
        </div>
        <div class="item-quantity">
          <button onclick="decreaseQuantity(${item.id})">-</button>
          <span>${item.quantity}</span>
          <button onclick="increaseQuantity(${item.id})">+</button>
        </div>
      `;
  
      cartContainer.appendChild(itemElement);
    });
  
    document.getElementById('total-price').textContent = total.toFixed(2);
  }
  
  function increaseQuantity(id) {
    const item = cartItems.find(i => i.id === id);
    if (item) item.quantity++;
    renderCart();
  }
  
  function decreaseQuantity(id) {
    const item = cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      item.quantity--;
    } else if (item && item.quantity === 1) {
      const index = cartItems.findIndex(i => i.id === id);
      cartItems.splice(index, 1);
    }
    renderCart();
  }
  
  // Initial render
  renderCart();
  