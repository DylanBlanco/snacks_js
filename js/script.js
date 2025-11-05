// selezione del container per inserire le card
const containerElement = document.getElementById('container-cards');

/* ---------------------------------------------------------------------------------------------------
    TASK1 - calcola la somma di due numeri
--------------------------------------------------------------------------------------------------- */
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

const btnCalcSumTask1 = document.createElement('button');
btnCalcSumTask1.innerHTML = 'Calcola Somma';
btnCalcSumTask1.style.width = '20%';
btnCalcSumTask1.style.height = '20%';
cardTask1.appendChild(btnCalcSumTask1);

const resultSum = document.createElement('div');
cardTask1.appendChild(resultSum);

btnCalcSumTask1.addEventListener('click', () => {
    const numT1 = parseFloat(inputNum1.value);
    const numT2 = parseFloat(inputNum2.value);
    const sum = numT1 + numT2;
    resultSum.innerHTML = `risultato: ${sum}`;
})
cardTask1.appendChild(resultSum);

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