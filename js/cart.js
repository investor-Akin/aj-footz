// ─── AJ FOOTZ Cart System ────────────────────────────────────────────────────
let cart = [];
const WHATSAPP_NUMBER = "2348000000000"; // Demo number — replace with real number

function addToCart(productId, size, qty = 1) {
  const product = AJ_PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  if (!size) { showCartToast("Please select a size", "warning"); return; }

  const existing = cart.find(item => item.id === productId && item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ ...product, size, qty });
  }
  updateCartUI();
  showCartToast(`${product.name} added to cart!`, "success");
  openCartSidebar();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) removeFromCart(index);
  else updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function cartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
  // Update badge
  document.querySelectorAll(".cart-count").forEach(el => {
    el.textContent = cartCount();
    el.style.display = cartCount() > 0 ? "flex" : "none";
  });

  // Update sidebar
  const cartItems = document.getElementById("cartItems");
  const cartFooter = document.getElementById("cartFooter");
  const cartEmpty = document.getElementById("cartEmpty");
  if (!cartItems) return;

  if (cart.length === 0) {
    cartItems.innerHTML = "";
    if (cartEmpty) cartEmpty.style.display = "block";
    if (cartFooter) cartFooter.style.display = "none";
    return;
  }

  if (cartEmpty) cartEmpty.style.display = "none";
  if (cartFooter) cartFooter.style.display = "block";

  cartItems.innerHTML = cart.map((item, i) => `
    <div class="cart-item d-flex gap-2 mb-3 pb-3 border-bottom border-secondary">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img rounded">
      <div class="flex-grow-1">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="d-flex align-items-center gap-2 mt-1">
          <button class="qty-btn" onclick="changeQty(${i}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
          <button class="remove-btn ms-auto" onclick="removeFromCart(${i})">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("cartTotal").textContent = formatPrice(cartTotal());
}

function proceedToWhatsApp() {
  if (cart.length === 0) { showCartToast("Your cart is empty!", "warning"); return; }

  let msg = "Hello AJ FOOTZ! 👋\n\nI'd like to place an order:\n\n";
  cart.forEach((item, i) => {
    msg += `${i + 1}. *${item.name}*\n   Size: ${item.size} | Qty: ${item.qty} | ${formatPrice(item.price * item.qty)}\n\n`;
  });
  msg += `*Order Total: ${formatPrice(cartTotal())}*\n\n`;
  msg += "Please confirm availability and delivery details. Thank you! 🙏";

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function openCartSidebar() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.add("open");
  if (overlay) overlay.classList.add("active");
}

function closeCartSidebar() {
  const sidebar = document.getElementById("cartSidebar");
  const overlay = document.getElementById("cartOverlay");
  if (sidebar) sidebar.classList.remove("open");
  if (overlay) overlay.classList.remove("active");
}

function showCartToast(msg, type = "success") {
  const toast = document.getElementById("cartToast");
  if (!toast) return;
  toast.textContent = msg;
  toast.className = `cart-toast show ${type}`;
  setTimeout(() => toast.classList.remove("show"), 3000);
}
