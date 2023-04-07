// Get the necessary elements from the DOM
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.nav-list ul');
const menuItems = document.querySelectorAll('.nav-list ul li a');
const header = document.querySelector('.header');

// Toggle mobile menu when hamburger is clicked
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobileMenu.classList.toggle('active');
});

// Change header background color on scroll
document.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;
if (scrollPosition > 250) {
header.style.backgroundColor = '#29323c';
} else {
header.style.backgroundColor = 'transparent' ;
}
});

// Toggle mobile menu when a menu item is clicked
menuItems.forEach((item) => {
item.addEventListener('click', () => {
hamburger.classList.toggle('active');
mobileMenu.classList.toggle('active');
});
});