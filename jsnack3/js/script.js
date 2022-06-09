// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


// col ciclo for moltiplico il prompt con la domanda
// per 10 volte 
let sumNumber = 0;
for(let i = 0; i < 10; i++){
    let thisNumber = parseInt( prompt('Dimmi un numero')[i]);
    console.log(thisNumber);

    sumNumber += ( parseInt( thisNumber));
    console.log("somma finale",sumNumber);

    // let sumNumber = 0
    // for(let i = 0; i < userNumber.length; i++){
    //     console.log( parseInt(userNumber[i]));
    
    //     sumNumber += ( parseInt(userNumber[i]));
    }

    // if(thisNumber% 2 === 0){
    //  document.getElementById('red').innerHTML += thisNumber +' ' ;
    //  }else{
    //      document.getElementById('green').innerHTML += thisNumber +' ' ;   
    //  }
 aaa