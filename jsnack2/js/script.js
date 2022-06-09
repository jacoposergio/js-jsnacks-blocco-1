// Chiedi un numero di 4 cifre all’utente nel prompt
//  e calcola la somma di tutte le cifre che compongono il numero.

// chiedo un numero di 4 cifre all'utente 
const userNumber = prompt('Dimmi un numero di 4 cifre');
console.log(userNumber);

// divido i numeri col ciclo for, 
// imposto variabile sumNumber a cui sommare i numeri del ciclo 

let sumNumber = 0
for(let i = 0; i < userNumber.length; i++){
    console.log( parseInt(userNumber[i]));

    sumNumber += ( parseInt(userNumber[i]));
}

// trovo il risultato
console.log(sumNumber);

