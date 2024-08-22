// Get Elements from HTML
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close');
const linksOfSections = document.getElementById('links-of-sections');
const bgMenu = document.getElementById('bg-menu');

const themeBtn =document.getElementById('theme-btn');
const themeIcon =document.getElementById('theme-icon');

menu.onclick = () => {
  linksOfSections.classList.add('menu-eles-container');
  linksOfSections.style.animationName = 'menuAnimation';
  linksOfSections.style.animationDuration = '0.5s';
  bgMenu.style.display = 'flex';
}
closeBtn.onclick = () => {
  linksOfSections.classList.remove('menu-eles-container');
  bgMenu.style.display = 'none';
}

// theme script
let theme = 'light';
themeBtn.onclick = () => {
  if(theme === 'light') {
    document.body.style.backgroundColor = '#222';
    document.body.style.color = '#fff';
    themeIcon.className = 'fa-solid fa-sun';
    theme = 'dark';
  }
  else {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#000';
    themeIcon.className = 'fa-solid fa-moon';
    theme = 'light';
  }
}