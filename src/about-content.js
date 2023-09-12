import aboutBanner from './about-baner.jpg';
import saul from './saul.jpg';
import gina from './gina.jpg';
import plus from './plus.svg';
import equal from './equal.svg';
import cock from './black-portuguese-cock.png';

export default (function(){
    //Create elements
    const contentWrapper = document.createElement('div');
    const innerWrapper = document.createElement('div');

    const ginaSquare = document.createElement('div');
    const saulSquare = document.createElement('div');
    const title = document.createElement('h1');
    const plusImg = document.createElement('img');
    const equalImg = document.createElement('img');
    const chickenLove = document.createElement('img');

    const ginaImg = document.createElement('img');
    const ginaText = document.createElement('p');

    const saulImg = document.createElement('img');
    const saulText = document.createElement('p');

    //Add content to elements
    title.textContent = 'Meet the owners:'

    ginaImg.src = gina;
    saulImg.src = saul;
    plusImg.src = plus;
    equalImg.src = equal;
    chickenLove.src = cock;

    ginaText.textContent = 'Virginia Alves-Tavares, born in Toronto Canada, is the eldest daughter of a Portuguese family. Currently acting as the Main Chef she really knows chicken!';
    saulText.textContent = 'Saul Tavaes, born somewhere between Lisbon and Aveiro, is also from a Portuguese family. He is the manager of the establishment making sure everyone gets the best possible service & chicken!';

    //Add classes to elements
    ginaImg.classList.add('owners-selfie');
    saulImg.classList.add('owners-selfie');

    ginaSquare.classList.add('owners-square');
    saulSquare.classList.add('owners-square');

    plusImg.classList.add('plus');
    equalImg.classList.add('plus');
    chickenLove.classList.add('cock-size');

    contentWrapper.classList.add('content-wrapper');

    //Append elements
    ginaSquare.appendChild(ginaImg);
    ginaSquare.appendChild(ginaText);

    saulSquare.appendChild(saulImg);
    saulSquare.appendChild(saulText);

    innerWrapper.appendChild(ginaSquare);
    innerWrapper.appendChild(plusImg);
    innerWrapper.appendChild(saulSquare);
    innerWrapper.appendChild(equalImg);
    innerWrapper.appendChild(chickenLove);

    contentWrapper.appendChild(title);
    contentWrapper.appendChild(innerWrapper);

    return {contentWrapper, aboutBanner}
})(); 