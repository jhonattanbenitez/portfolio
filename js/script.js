//Responsive menu
let mainMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainMenu.classList.toggle('active');
});
//sticky navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
console.log(navbar);
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}