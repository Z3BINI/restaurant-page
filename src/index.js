import structure from './domMaker.js';
import home from './home-content.js';
import './style.css';

const listener = (function() {
    const menuOpts = document.querySelectorAll('a.menu');

    menuOpts.forEach(optn => optn.addEventListener('click', (e) => changeContent(e.target.textContent)));

    const changeContent = function(page) {
        console.log(page);
    }
})();


structure.contentEl.appendChild(home.contentWrapper);


