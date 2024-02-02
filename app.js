const hamburger = document.querySelector('.header .nav-bar #hamburger');
const header = document.querySelector('.header.container');

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});


  
  function toggleNav() {
    var navList = document.getElementById('navList');
    if (navList.style.display === "flex"){
        navList.style.display = "none";
    } else{
        navList.style.display = "flex";
    }
  }
  
/* Existing JavaScript code */

function toggleTheme() {
    var themeToggle = document.getElementById("themeToggle");
    var themeStylesheet = document.getElementById("themeStylesheet");

    if (themeToggle.checked) {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    }
}
