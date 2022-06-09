// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e
// in verde i numeri pari.

// scrivo array di numeri
const tagNumbers = [1,2,4,5,6,56,34,12,54,67,23,54,12];
console.log(tagNumbers)


for(let i = 0; i < tagNumbers.length; i++){
   const thisNumber = tagNumbers[i];
   if(thisNumber% 2 === 0){
    document.getElementById('red').innerHTML += thisNumber +' ' ;
    }else{
        document.getElementById('green').innerHTML += thisNumber +' ' ;   
    }
}