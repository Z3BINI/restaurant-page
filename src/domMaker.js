export default (function() {

    //Cache DOM
    const wrapper = document.querySelector('#content');

    //Create elements
    const sideBarEl = document.createElement('div');
    const mainEl = document.createElement('div');

    const bannerEl = document.createElement('div');
    const contentEl = document.createElement('div');

    //Give elements classes
    sideBarEl.classList.add('sidebar');
    mainEl.classList.add('main');
    bannerEl.classList.add('banner');
    contentEl.classList.add('content');

    //Append elements
    wrapper.appendChild(sideBarEl);
    wrapper.appendChild(mainEl);

    mainEl.appendChild(bannerEl);
    mainEl.appendChild(contentEl);
    
})();