import menuBanner from './menu-baner.jpg';
import chicken from './chicken-plate.jpg';

export default (function() {
    //Create
    const contentWrapper = document.createElement('div');
    const innerWrapper = document.createElement('div');
    const title = document.createElement('h1');

    const gridSquares = [];
    const gridImgs = [];
    const gridTxts = [];

    
    //Lazy loop for menu mock elements
    for (let i = 0; i < 6; i++) {
        //Create mock menu squares & inner elements
        gridSquares[i] = document.createElement('div');
        gridImgs[i] = document.createElement('img');
        gridTxts[i] = document.createElement('p');

        //Give class to every square
        gridSquares[i].classList.add('grid-square');

        //Give mock content to every inner html element of square
        gridImgs[i].src = chicken;
        gridTxts[i].innerHTML = '<b>BBQ Chicken</b> servers 2. <br> 20€ - <i>includes 1 beer</i>';

        //Append current inner element to current outter elemenet
        gridSquares[i].appendChild(gridImgs[i]);
        gridSquares[i].appendChild(gridTxts[i]);

        //Append this created outter element to the outter wrapper
        innerWrapper.appendChild(gridSquares[i]);
    }
    title.textContent = 'The menu:';

    //Class
    innerWrapper.classList.add('menu-grid');
    contentWrapper.classList.add('content-wrapper');

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(innerWrapper);
    
    return {contentWrapper, menuBanner}
})();