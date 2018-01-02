// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav__main");
var navMainPadding = document.getElementById("nav__main--padding");
var navMainLogo = document.getElementById("nav__main--logo");
//var navbar = document.getElementsByClassName("nav__main");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navMainPadding.classList.add("nav__margin")
    navMainLogo.classList.add("visible")
  } else {
    navbar.classList.remove("sticky");
    navMainPadding.classList.remove("nav__margin");
    navMainLogo.classList.remove("visible")
  }
}