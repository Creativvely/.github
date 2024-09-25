var navIcon = document.getElementsByClassName("hamburger-icon")[0];
var navLinks = document.getElementsByClassName("nav-links")[0];

navIcon.addEventListener( "click", function( event ) {
    navLinks.classList.toggle("display-visible");
})