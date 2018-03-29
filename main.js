/*function nombre_a(min, max)
    {
        var nb = min + (max-min+1)*Math.random();
        return Math.floor(nb);
    }

var nb = nombre_a(0, 100);  // nb a deviner
var cpt = 0;    // nb de coups
var saisie;
var msg = 'Le nombre à deviner est compris entre 0 et 100.';


do {
    saisie = prompt(msg);
    cpt++;
    // message a afficher au prochain tour :
    if(saisie > nb)
        msg = "C'est moins";
    else
        msg = "C'est plus";
    }

while(saisie != nb);

document.write("Bravo, tu as gagne en " + cpt + " coups !")
alert("Bravo, tu as gagne en " + cpt + " coups !");*/

var numbercacher = Math.floor(Math.random() * 101);
var button = document.getElementById("bnt");
var input = document.getElementById("input");
var result= document.getElementById("result");
var cmpt = 0;

console.log(numbercacher);
//console.log(Math.random());


function verifs(event) {
    event.preventDefault();
    cmpt++;
    var number = input.value;
    
    
    if (numbercacher > number)
     return result.innerHTML = "Faux! " + number + " est trop petit";


   if (numbercacher < number)  
     return result.innerHTML = "Faux! " + number + " est trop grand";


     result.innerHTML = "Bravo, tu as gagne en " + cmpt + " coups !" ;
}

button.addEventListener('click', function(event) {
    
    verifs(event);

})