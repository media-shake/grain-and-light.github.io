(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const money = value => new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'}).format(value);
  const products = [
    {id:'film-color-200',name:'Color 200 · 35mm Film',category:'film',price:12.99,tag:'Everyday color',description:'A versatile color-negative film for daylight walks, portraits, and everyday moments.',image:'product-01.jpg'},
    {id:'film-color-400',name:'Color 400 · 35mm Film',category:'film',price:14.99,tag:'All-round favorite',description:'A flexible 400-speed color film for changing light and spontaneous frames.',image:'product-02.jpg'},
    {id:'camera-classic-slr',name:'Classic 35mm SLR',category:'cameras',price:149.00,tag:'Vintage body',description:'A vintage manual-focus SLR concept. Check shutter, meter, seals, and condition before buying.',image:'product-03.jpg'},
    {id:'camera-mechanical-slr',name:'Mechanical 35mm SLR',category:'cameras',price:189.00,tag:'Manual control',description:'A classic manual camera concept with tactile controls. Final price depends on tested condition.',image:'product-04.jpg'},
    {id:'lens-prime-50',name:'Manual 50mm Prime Lens',category:'lenses',price:79.00,tag:'Everyday lens',description:'A versatile manual prime lens concept. Confirm mount compatibility before purchase.',image:'product-05.jpg'},
    {id:'bag-canvas',name:'Canvas Camera Messenger',category:'bags',price:64.00,tag:'Carry in style',description:'A heritage-inspired canvas bag concept with leather-look trim and space for everyday gear.',image:'product-06.jpg'},
    {id:'tripod-travel',name:'Compact Travel Tripod',category:'accessories',price:39.00,tag:'Steady frames',description:'A compact tripod concept for steady framing and long exposures with lightweight gear.',image:'product-07.jpg'},
    {id:'darkroom-tank',name:'35mm Film Developing Tank',category:'darkroom',price:34.00,tag:'Darkroom essential',description:'A film developing tank concept with reel. Check reel format and capacity before purchase.',image:'product-08.jpg'}
  ];
  let activeFilter = 'all';
  let cart = {};
  try { cart = JSON.parse(localStorage.getItem('gl-cart') || '{}') || {}; } catch (_) { cart = {}; }
  const grid = $('#productGrid'), search = $('#productSearch'), sort = $('#sortSelect'), count = $('#productCount');
  const toast = $('#toast');
  let toastTimer;
  function showToast(message) {
    toast.textContent = message; toast.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
  }
  function filteredProducts() {
    const query = (search.value || '').trim().toLowerCase();
    let list = products.filter(p => (activeFilter === 'all' || p.category === activeFilter) &&
      [p.name,p.category,p.description,p.tag].some(v => v.toLowerCase().includes(query)));
    if (sort.value === 'low') list.sort((a,b) => a.price-b.price);
    if (sort.value === 'high') list.sort((a,b) => b.price-a.price);
    if (sort.value === 'az') list.sort((a,b) => a.name.localeCompare(b.name));
    return list;
  }
  function renderProducts() {
    const list = filteredProducts();
    grid.innerHTML = list.map(p => `<article class="product-card">
      <div class="product-image-wrap"><img src="assets/images/products/${p.image}" alt="${p.name}" loading="lazy"><span class="product-tag">${p.tag}</span><button class="quick-add" data-add="${p.id}" aria-label="Add ${p.name} to bag">Add to bag +</button></div>
      <div class="product-meta"><span class="product-category">${p.category}</span><h3 class="product-name">${p.name}</h3><p class="product-description">${p.description}</p><div class="product-price-row"><span class="product-price">${money(p.price)}</span><button class="product-details" data-details="${p.id}">Details</button></div></div>
    </article>`).join('');
    $('#emptyState').hidden = list.length > 0;
    count.textContent = `${list.length} ${list.length === 1 ? 'piece' : 'considered essentials'}`;
  }
  function saveCart() {
    try { localStorage.setItem('gl-cart', JSON.stringify(cart)); } catch (_) { /* local storage may be unavailable */ }
    renderCartCount(); renderCart();
  }
  function totalQuantity() { return Object.values(cart).reduce((sum, n) => sum + n, 0); }
  function renderCartCount() { $('#cartCount').textContent = totalQuantity(); $('#drawerCount').textContent = `(${totalQuantity()})`; }
  function renderCart() {
    const entries = products.filter(p => cart[p.id] > 0);
    $('#cartItems').innerHTML = entries.length ? entries.map(p => `<div class="cart-line">
      <img src="assets/images/products/${p.image}" alt="">
      <div><h3>${p.name}</h3><p>${money(p.price)}</p><div class="quantity-controls"><button data-qty="${p.id}" data-delta="-1" aria-label="Remove one ${p.name}">−</button><span>${cart[p.id]}</span><button data-qty="${p.id}" data-delta="1" aria-label="Add one ${p.name}">+</button></div><button class="remove-item" data-remove="${p.id}">Remove</button></div><strong>${money(p.price*cart[p.id])}</strong>
    </div>`).join('') : '<p class="cart-empty">Your bag is waiting for a little something.</p>';
    const subtotal = entries.reduce((sum,p) => sum + p.price*cart[p.id], 0);
    $('#cartSubtotal').textContent = money(subtotal);
    $('#checkoutButton').disabled = entries.length === 0;
  }
  function addToCart(id) {
    if (!products.some(p => p.id === id)) return;
    cart[id] = (cart[id] || 0) + 1; saveCart(); showToast('Added to your bag.');
  }
  function openCart() { $('#cartDrawer').hidden = false; $('#overlay').hidden = false; document.body.style.overflow = 'hidden'; $('#closeCart').focus(); }
  function closeCart() { $('#cartDrawer').hidden = true; $('#overlay').hidden = true; document.body.style.overflow = ''; $('#cartToggle').focus(); }
  $$('.filter-button').forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    $$('.filter-button').forEach(b => b.classList.toggle('active', b === button));
    renderProducts();
  }));
  $$('.collection-card').forEach(card => card.addEventListener('click', () => {
    activeFilter = card.dataset.quickFilter || 'all';
    $$('.filter-button').forEach(b => b.classList.toggle('active', b.dataset.filter === activeFilter));
  }));
  search.addEventListener('input', renderProducts); sort.addEventListener('change', renderProducts);
  $('#searchToggle').addEventListener('click', () => { search.focus(); $('#shop').scrollIntoView({behavior:'smooth'}); });
  $('#menuToggle').addEventListener('click', () => {
    const nav = $('#mainNav'), open = nav.classList.toggle('open');
    $('#menuToggle').setAttribute('aria-expanded', String(open));
  });
  $$('#mainNav a').forEach(a => a.addEventListener('click', () => { $('#mainNav').classList.remove('open'); $('#menuToggle').setAttribute('aria-expanded','false'); }));
  $('#cartToggle').addEventListener('click', openCart); $('#closeCart').addEventListener('click', closeCart); $('#overlay').addEventListener('click', closeCart);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !$('#cartDrawer').hidden) closeCart(); });
  document.addEventListener('click', e => {
    const add = e.target.closest('[data-add]');
    if (add) addToCart(add.dataset.add);
    const qty = e.target.closest('[data-qty]');
    if (qty) { const id=qty.dataset.qty; cart[id]=(cart[id]||0)+Number(qty.dataset.delta); if (cart[id] <= 0) delete cart[id]; saveCart(); }
    const remove = e.target.closest('[data-remove]');
    if (remove) { delete cart[remove.dataset.remove]; saveCart(); showToast('Removed from your bag.'); }
    const details = e.target.closest('[data-details]');
    if (details) { const p=products.find(item=>item.id===details.dataset.details); if(p) showToast(`${p.name} — ${p.description}`); }
  });
  $('#checkoutButton').addEventListener('click', () => showToast('Demo only: checkout is not connected.'));
  $('#newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    $('#newsletterMessage').textContent = 'Thanks for your interest! This demo does not submit or store email addresses.';
    $('#newsletterEmail').value = '';
  });
  $('#backToTop').addEventListener('click', e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}); });
  renderProducts(); renderCartCount(); renderCart();
})();