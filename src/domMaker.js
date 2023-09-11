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
    const logo = document.createElement('div');
    const chickenLogo = document.createElement('img');
    const logoText = document.createElement('p');

    const linkContainer = document.createElement('div');
    const menuItems = [];
    for (let i = 0; i < 3; i++) {
        menuItems[i] = document.createElement('a');
    }
    
    //Add element content
    chickenLogo.src = pokpok;
    logoText.textContent = 'Gina\'s Portuguese Chicken!';

    menuItems[0].textContent = 'HOME';
    menuItems[1].textContent = 'MENU';
    menuItems[2].textContent = 'ABOUT US';

    //Give elements classes
    linkContainer.classList.add('links');
    logo.classList.add('logo');

    //Append elements to parent
    logo.appendChild(chickenLogo);
    logo.appendChild(logoText);

    menuItems.forEach(menuItem => linkContainer.appendChild(menuItem));

    sideBarEl.appendChild(logo);
    sideBarEl.appendChild(linkContainer);

})();