/* ---------------------------------------------------------------------------------------------------
    CREAZIONE CARD JS
--------------------------------------------------------------------------------------------------- */
// selezione del container per inserire le card
const containerElement = document.getElementById('container-cards');
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

function createInputContainer() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    return inputContainer;
}


/* ---------------------------------------------------------------------------------------------------
    TASK1 - calcola la somma di due numeri
--------------------------------------------------------------------------------------------------- */
const cardTask1 = createCardJs();  // aggiungi card alla pagina
const titleT1 = document.createElement('h4');
titleT1.innerHTML = 'Task1 - Somma di due numeri';
cardTask1.appendChild(titleT1);
const inputContainerT1 = cardTask1.appendChild(createInputContainer());


const inputNum1 = document.createElement('input');
inputNum1.type = 'number';
inputNum1.placeholder = 'inserisci num1';
inputNum1.style.width = '35%';
inputNum1.style.marginRight = '3px';

const inputNum2 = document.createElement('input');
inputNum2.type = 'number';
inputNum2.placeholder = 'inserisci num2';
inputNum2.style.width = '35%';
inputNum2.style.marginRight = '5px';

const btnCalcSumTask1 = document.createElement('button');
btnCalcSumTask1.innerHTML = 'Calcola';
btnCalcSumTask1.style.width = '20%';
inputContainerT1.appendChild(inputNum2);
inputContainerT1.appendChild(inputNum1);
inputContainerT1.appendChild(btnCalcSumTask1);

const resultSum = document.createElement('div');
cardTask1.appendChild(resultSum);

btnCalcSumTask1.addEventListener('click', () => {
    const numT1 = parseFloat(inputNum1.value);
    const numT2 = parseFloat(inputNum2.value);
    const sum = numT1 + numT2;
    resultSum.innerHTML = `risultato: ${sum}`;
})
cardTask1.appendChild(resultSum);


/* ---------------------------------------------------------------------------------------------------
    * TASK2 - crea un array di giocattolli vuoto e chiedi all'utente di inserirne 5
--------------------------------------------------------------------------------------------------- */
const cardTask2 = createCardJs();
const titleTask2 = document.createElement('h4');
titleTask2.innerHTML = 'Task2 - inserisci 5 giocattoli';
cardTask2.appendChild(titleTask2);
const inputContainerT2 = cardTask2.appendChild(createInputContainer());

const toysArray = [];

const inputToy = document.createElement('input');
inputToy.type = 'text';
inputToy.placeholder = 'inserisci nome giocattolo';
inputToy.style.width = '80%';
inputToy.style.marginRight = '5px';
inputContainerT2.appendChild(inputToy);

const btnAddToy = document.createElement('button');
btnAddToy.innerHTML = 'Add Toy';
btnAddToy.style.width = '18%';
inputContainerT2.appendChild(btnAddToy);

const resultToys = document.createElement('div');
cardTask2.appendChild(resultToys);

btnAddToy.addEventListener('click', () => {
    const nomeGiocattolo = inputToy.value.trim();
    
    resultToys.innerHTML = `Elenco giocattoli:`;
    if (nomeGiocattolo && toysArray.length < 5) {
        toysArray.push(nomeGiocattolo);
        inputToy.value = '';
        toysArray.forEach((toy, i) => {
            resultToys.innerHTML += `<p>Giocattolo ${i + 1}: ${toy}</p>`;
        });
    }
    else if (toysArray.length >= 5) {
        resultToys.innerHTML = `Hai già inserito 5 giocattoli.`;
        toysArray.forEach((toy, i) => {
            resultToys.innerHTML += `<p>Giocattolo ${i + 1}: ${toy}</p>`;
        });
    }
});


/* ---------------------------------------------------------------------------------------------------
    * TASK3 - Dato un array di oggetti,
            Stampa risultato,
            Calcola il numero totale degli studenti,
            Trova tutti gli studenti di un corso specifico
--------------------------------------------------------------------------------------------------- */
const cardTask3 = createCardJs();
const titleTask3 = document.createElement('h4');
titleTask3.innerHTML = `Task3 - Array di Oggetti`;
cardTask3.appendChild(titleTask3);

const studenti = [
    {
        id: 101,
        nome: "Marco",
        cognome: "Rossi",
        eta: 22,
        corso: "Informatica",
        voti: [28, 30, 25, 29]
    },
    {
        id: 102,
        nome: "Laura",
        cognome: "Bianchi",
        eta: 20,
        corso: "Design",
        voti: [27, 28, 30]
    },
    {
        id: 103,
        nome: "Giuseppe",
        cognome: "Verdi",
        eta: 24,
        corso: "Economia",
        voti: [24, 26, 22, 27, 28]
    },
    {
        id: 104,
        nome: "Chiara",
        cognome: "Neri",
        eta: 21,
        corso: "Informatica",
        voti: [30, 30, 29]
    }
];
console.log(studenti);

const resultStudents = document.createElement('div');
resultStudents.style.fontSize = '14px';
cardTask3.appendChild(resultStudents);

// const numStudents = studenti.length;
resultStudents.innerHTML += `Numero totale degli Studenti: <b>${studenti.length}</b>`;

studenti.forEach((s, i) => {
    resultStudents.innerHTML +=
    `
        <ul><b>(${i+1})</b> Studente, <strong>${s.cognome} ${s.nome}</strong>
            <li>ID: ${s.id}</li>
            <li>Età: ${s.eta}</li>
            <li>Corso: ${s.corso}</li>
            <li>
                <ul>Voti:
                    <li>${s.voti}</li>
                </ul>
            </li>
        </ul>
    `;
});