const burgerBtn = document.querySelector('.burger-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');

burgerBtn.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
    dropdownMenu.classList.toggle('show');
});