function myFunction() {
	const burger = document.querySelector('.hamburger');
var x = document.getElementById("misLinks");
if (x.className === "nav-links") {
  x.className += " responsive";
} else {
  x.className = "nav-links";
}
//Burger animation
burger.classList.toggle('toggle');
}


//script para hacer el menu sticky
window.onscroll = function() {funcionSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function funcionSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}