//Responsive menu
let mainMenu = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainMenu.classList.toggle('active');
    
});

let navLinks = document.getElementsByClassName('nav-links');

Array.from(navLinks).forEach(link =>{
  link.addEventListener('click', ()=>{
    mainMenu.classList.remove('active');
  });
});

rolldown = document.querySelectorAll(".rolldown-list li");

rolldown.forEach((element, i) => {
    const delay = i / 4 +"s";
    element.style.animationDelay = delay;
});

