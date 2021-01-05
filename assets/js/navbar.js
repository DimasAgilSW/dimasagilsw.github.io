const menuToggle = document.querySelector('.flex-navbar .check-navbar-flex');
const nav = document.querySelector('.flex-navbar ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('animasi');
});