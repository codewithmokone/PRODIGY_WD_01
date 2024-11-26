const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuItems = document.getElementsByClassName("menu-item");
const navBar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navLinks');

// toggles the mobile menu
burgerMenu.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('hide');
})

// Loops through mobile navbar links
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        mobileMenu.classList.toggle('hide');
    });
}

// Handles adding a class name to a navbar element
window.addEventListener('scroll', () => {
    if (window.scrollY > 60){
        navBar.classList.add('scrolled');
    }else{
        navBar.classList.remove('scrolled');
    }
})