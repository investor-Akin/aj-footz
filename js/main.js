// ─── AJ FOOTZ Main JS ────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

  // ── Sticky Navbar ──────────────────────────────────────────────────────────
  const navbar = document.getElementById("mainNavbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // ── Scroll Reveal Animations ───────────────────────────────────────────────
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

  // ── Announcement Bar ───────────────────────────────────────────────────────
  const bar = document.querySelector(".announcement-bar");
  if (bar) {
    // Already handled by CSS marquee
  }

  // ── Active nav link ────────────────────────────────────────────────────────
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // ── Custom Order modal form (contact page) ─────────────────────────────────
  const customForm = document.getElementById("customOrderForm");
  if (customForm) {
    customForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name    = document.getElementById("co-name")?.value    || "";
      const phone   = document.getElementById("co-phone")?.value   || "";
      const type    = document.getElementById("co-type")?.value    || "";
      const size    = document.getElementById("co-size")?.value    || "";
      const color   = document.getElementById("co-color")?.value   || "";
      const notes   = document.getElementById("co-notes")?.value   || "";

      const msg = `Hello AJ FOOTZ! 👋\n\n*Custom Order Request*\n\nName: ${name}\nPhone: ${phone}\nType: ${type}\nSize: ${size}\nPreferred Color/Style: ${color}\nAdditional Notes: ${notes}\n\nPlease guide me on the next steps. Thank you!`;
      const url = `https://wa.me/2348000000000?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
    });
  }

  // ── Product filter tabs (shop & marketplace) ───────────────────────────────
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      filterProducts(cat);
    });
  });

  // ── Search bar (marketplace) ───────────────────────────────────────────────
  const searchInput = document.getElementById("productSearch");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const q = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll(".product-card-wrap");
      cards.forEach(card => {
        const name = card.dataset.name?.toLowerCase() || "";
        const cat  = card.dataset.cat || "";
        card.style.display = name.includes(q) ? "" : "none";
      });
    });
  }
});

// ── Filter products by category ─────────────────────────────────────────────
function filterProducts(cat) {
  const cards = document.querySelectorAll(".product-card-wrap");
  cards.forEach(card => {
    const cardCat = card.dataset.cat;
    if (cat === "all" || cardCat === cat) {
      card.style.display = "";
      card.style.animation = "fadeInUp 0.4s ease forwards";
    } else {
      card.style.display = "none";
    }
  });
}

// ── Render product cards (used in multiple pages) ───────────────────────────
function renderProductCard(product, showAddToCart = false) {
  const badgeHTML = product.badge
    ? `<span class="product-badge">${product.badge}</span>` : "";

  const sizesHTML = showAddToCart ? `
    <select class="form-select size-select mb-2" id="size-${product.id}">
      <option value="">Select Size</option>
      ${product.sizes.map(s => `<option value="${s}">${s}</option>`).join("")}
    </select>
    <button class="btn btn-gold w-100"
      onclick="addToCart(${product.id}, document.getElementById('size-${product.id}').value)">
      <i class="fas fa-shopping-bag me-2"></i>Add to Cart
    </button>` : `
    <a href="marketplace.html" class="btn btn-gold w-100">
      <i class="fab fa-instagram me-2"></i>Order via Instagram
    </a>`;

  return `
    <div class="col product-card-wrap" data-cat="${product.category}" data-name="${product.name.toLowerCase()}">
      <div class="product-card reveal">
        ${badgeHTML}
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
          <div class="product-overlay">
            <p class="product-desc-preview">${product.description}</p>
          </div>
        </div>
        <div class="product-info">
          <h5 class="product-name">${product.name}</h5>
          <div class="product-price">${formatPrice(product.price)}</div>
          ${sizesHTML}
        </div>
      </div>
    </div>`;
}
