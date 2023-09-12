import structure from './domMaker.js';
import home from './home-content.js';
import about from './about-content.js';
import menu from './menu-content.js';
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
        //Clear current DOM content element
        structure.contentEl.innerHTML = '';

        switch(page) {
            case 'HOME':
                structure.contentEl.appendChild(home.contentWrapper);
                structure.bannerEl.style.backgroundImage = `url('${home.mainBanner}')`;
                break;
            case 'MENU':
                structure.contentEl.appendChild(menu.contentWrapper);
                structure.bannerEl.style.backgroundImage = `url('${menu.mainBanner}')`;
                break;
            case 'ABOUT US':
                structure.contentEl.appendChild(about.contentWrapper);
                structure.bannerEl.style.backgroundImage = `url('${about.aboutBanner}')`;
                break;
        }
    }
})();





