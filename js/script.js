
// funzione per creare una card
function createCardJs() {
    const cardJs = document.createElement('div');
    cardJs.classList.add('card-js');
    cardJs.style.backgroundColor = 'lightblue';
    cardJs.style.border = '1px solid blue';
    cardJs.style.borderRadius = '8px';
    cardJs.style.padding = '16px';
    cardJs.style.margin = '8px';
    cardJs.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    containerElement.appendChild(cardJs);

    return cardJs;
}