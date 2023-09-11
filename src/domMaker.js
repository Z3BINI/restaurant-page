//Import logos
import pokpok from './food-drumstick.svg';

export default (function() {    
    //Cache DOM
    const body = document.querySelector('body');

    /*OUTTER ELEMENTS*/ 
    //Create elements
    const wrapper = document.createElement('div');
    const sideBarEl = document.createElement('div');
    const mainEl = document.createElement('div');

    const bannerEl = document.createElement('div');
    const contentEl = document.createElement('div');

    //Give elements classes
    wrapper.id = 'content';
    sideBarEl.classList.add('sidebar');
    mainEl.classList.add('main');
    bannerEl.classList.add('banner');
    contentEl.classList.add('content');

    //Append elements
    body.appendChild(wrapper);

    wrapper.appendChild(sideBarEl);
    wrapper.appendChild(mainEl);

    mainEl.appendChild(bannerEl);
    mainEl.appendChild(contentEl);

    /*INNER ELEMENTS*/
    //Create sidebar elements
    const logo = document.createElement('img');

    logo.src = pokpok;

    sideBarEl.appendChild(logo);

})();