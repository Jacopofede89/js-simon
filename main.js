// Descrizione:
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

const randomNumGenerator = document.querySelector(".random");
const matchNumber = document.querySelector(".result");

const generator = [];

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 100) + 1;
    generator.push(number);
}

let userNumber = [];

randomNumGenerator.innerHTML = generator;

    setTimeout(() => {
    
            for (let i = 0; i < 5; i++) {
                let number = parseInt(prompt('Inserisci un numero'));
        
                if (number == generator[i]) {
                userNumber.push(number);
        
            }
            
            }if (userNumber.length == 5) {
            result.innerHTML = "Hai indovinato tutti i numeri!!!"
            }else {
            result.innerHTML = `Hai indovinato ${userNumber.length} numero/i: " ${userNumber} "`;
            }
        
}, 3000);
        