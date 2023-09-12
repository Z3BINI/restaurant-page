import structure from './domMaker.js';
import home from './home-content.js';
import './style.css';

const listener = (function() {
    //Cache DOM
    const menuOpts = document.querySelectorAll('a.menu');

    //Load HOME by default
    structure.contentEl.appendChild(home.contentWrapper);
    structure.bannerEl.style.backgroundImage = `url('${home.mainBanner}')`;

    //structure.bannerEl.body.style.backgroundImage = home.mainBanner;

    //Listen for menu clicks, call change page function
    menuOpts.forEach(optn => optn.addEventListener('click', (e) => changeContent(e.target.textContent)));

    //Change page function
    const changeContent = function(page) {
        console.log(page);
    }
})();





