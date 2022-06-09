// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// lascio l'array vuoto e ci pusho dentro il prompt (con la richiesta del numero)
// per 10 volte grazie al ciclo for

let numbers = [];
for(let i = 0; i < 10; i++)
   numbers.push( parseInt( prompt("Inserisci un numero")));

   console.log(numbers);
  
//    ora che ho riempito l'array con i numeri dell'utente, ripeto il ciclo for
// e sommo tutti i numeri alla nuova variabile ( che è uguale a 0) 
   let sumNumber = 0
   for(let i = 0; i < numbers.length; i++){
       console.log( parseInt(numbers[i]));
   
       sumNumber += ( parseInt(numbers[i]));
   }
   
//    stampo in pagina il risultato 

   console.log(sumNumber);
   document.getElementById('user-message').innerHTML += 'La somma dei numeri è '+ sumNumber  ; 