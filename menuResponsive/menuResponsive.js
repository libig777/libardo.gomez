//incluir etiquetas html del menu en la pagina
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};

// manejar efecto despliegue en círculo
//const hamburger = document.querySelector(".hamburger");
//const navLinks = document.querySelector(".topnav.responsive");
//const links = document.querySelectorAll(".topnav.responsive a");
//
//hamburger.addEventListener("click", () => {
//  navLinks.classList.toggle("open");
//  links.forEach(link => {
//    link.classList.toggle("fade");
//  });
//});


//funcion para desplegar boton hamburger
/*function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
*/

//script para hacer el menu sticky
/* window.onscroll = function() {funcionSticky()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function funcionSticky() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} */