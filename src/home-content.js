import owners from './owners.jpg';
import mainBanner from './main-baner.jpg';

export default (function() {

    //Create container
    const contentWrapper = document.createElement('div');
    const introWrapper = document.createElement('div');
    const title = document.createElement('h1');
    const intro = document.createElement('p');
    const introPicture = document.createElement('img');


    //Give elements content
    title.textContent = 'World famous chicken!';
    intro.textContent = 'Welcome to Gina\'s chicken official website, we are proud to finally have one! You can look at our menu or find out more information about our restaurant.';
    introPicture.src = owners;

    //Give elements necessary classes
    contentWrapper.classList.add('content-wrapper');
    introPicture.classList.add('owners');
    introWrapper.classList.add('intro-wrapper');

    //Append all elements to wrapper
    introWrapper.appendChild(intro);
    introWrapper.appendChild(introPicture);

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(introWrapper);


    //Return content
    return {contentWrapper, mainBanner};
})();