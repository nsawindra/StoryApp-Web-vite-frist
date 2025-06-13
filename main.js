import './components/app-bar.js';
import './components/story-item.js';
import './views/login-page.js';
import './views/register-view.js'; 
import './views/home-page.js';
import './views/add-story-page.js';
import './router.js';


const mainContent = document.querySelector('#main-content');
const skipLink = document.querySelector('.skip-link');

if (skipLink && mainContent) {
  skipLink.addEventListener('click', function (event) {
    event.preventDefault();
    mainContent.focus();
  });
}

console.log('Aplikasi berjalan dengan arsitektur MVP yang diperbaiki.');