const lunchBtn = document.getElementById('lunch');
const eveningBtn = document.getElementById('evening');
const lunchMenu = document.getElementById('lunch-menu');
const eveningMenu = document.getElementById('evening-menu');
const orderBtns = document.querySelectorAll('.order-btn');
const orderConfirmation = document.getElementById('order-confirmation');
const orderDetails = document.getElementById('order-details');
const closeBtn = document.querySelector('.close-btn');

// Initial state
lunchBtn.classList.add('active');
lunchMenu.classList.add('show');
eveningMenu.classList.add('hidden');

lunchBtn.addEventListener('click', toggleMenu);
eveningBtn.addEventListener('click', toggleMenu);

orderBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    showOrderConfirmation(btn.dataset.item);
  });
});

closeBtn.addEventListener('click', () => {
  orderConfirmation.classList.remove('show');
});

window.addEventListener('click', (e) => {
  if (e.target === orderConfirmation) {
    orderConfirmation.classList.remove('show');
  }
});

function showOrderConfirmation(itemName) {
  if (itemName) {
    orderDetails.textContent = `Order placed for ${itemName}!`;
    orderConfirmation.classList.add('show');
  }
}

function toggleMenu() {
  const isLunchActive = lunchBtn.classList.contains('active');

  // Toggle active class
  lunchBtn.classList.toggle('active');
  eveningBtn.classList.toggle('active');

  // Toggle menu container visibility
  lunchMenu.classList.toggle('show');
  eveningMenu.classList.toggle('show');

  // Toggle hidden class for smooth animation
  lunchMenu.classList.toggle('hidden');
  eveningMenu.classList.toggle('hidden');
}