// selezione del container dove inserire le card
const containerElement = document.getElementById('container-cards');

// task 1: calcola la somma di due numeri
const cardTask1 = createCardJs();  // aggiungi card alla pagina
const titleT1 = document.createElement('h3');
titleT1.innerHTML = 'Somma di due numeri';
cardTask1.appendChild(titleT1);

const inputNum1 = document.createElement('input');
inputNum1.type = 'number';
inputNum1.placeholder = 'inserisci num1';
inputNum1.style.width = '35%';
inputNum1.style.height = '20%';
inputNum1.style.marginRight = '5px';
cardTask1.appendChild(inputNum1);


const inputNum2 = document.createElement('input');
inputNum2.type = 'number';
inputNum2.placeholder = 'inserisci num2';
inputNum2.style.width = '35%';
inputNum2.style.height = '20%';
inputNum2.style.marginRight = '5px';
cardTask1.appendChild(inputNum2);

const btnCalcSum = document.createElement('button');
btnCalcSum.innerHTML = 'Calcola Somma';
btnCalcSum.style.width = '20%';
btnCalcSum.style.height = '20%';
cardTask1.appendChild(btnCalcSum);

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