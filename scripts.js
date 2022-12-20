//const mobileMenu = document.querySelector('.mobile-menu');

//target hamburger menu icon
const mobileMenu = document.querySelector(".mobile-menu");

//add event listener to click of hamburger icon
mobileMenu.addEventListener('click', () => {
    //toggle class name change
    mobileMenu.classList.toggle("mobile-open");
    console.log(mobileMenu);
});