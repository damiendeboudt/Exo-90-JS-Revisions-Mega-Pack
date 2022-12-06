
maFunction();


let nomVoiture = "Peugeot";
let x = 50
let z = 5
let w = 10

document.getElementById("demo").innerHTML = "z vaux " + z + ", w vaux " + w + ", le resultat est " + (z + w)

let d = z + w

alert( "d = " + d)

let prenom = "John", nom = "Doe", age = 35;

alert( "10 * 5 = " +10 * 5);
alert(" 10 / 2 = " + 10 / 2);
alert( "15 % 9 = " + 15 % 9);

let l = 10;
let k = 5;
l = k * 2;

function maFunction (){
    alert("Salut tout le monde")
}

function maFonctionRetour(){
   return  "Bonjour!"
}
document.getElementById("demoRetour").innerHTML = maFonctionRetour()

document.getElementById("monBoutton").addEventListener("click", function () {
  alert()
})

document.getElementById('changeSurhover').addEventListener("mouseover", function (){
  document.getElementById("changeSurhover").style.backgroundColor = "red"
})

let txt = "une longue phrase"
let longueur = txt.length
alert("longueur de ma variable txt = " +longueur)

let str1 = "Bonjour";
let str2= "le monde";
alert(str1 + " " + str2)

// tableau liste voiture

let table = ["Renault", "Citroen", "Volvo"]
let maVoiture = table[1]
table[0] = "Ford"
alert("La longueur de mon tableau est de " + table.length)
table.pop()
table.push("Ferrari")
console.table(table)

//random Number

let rNumber = Math.random()
console.log(rNumber)

let fNumber = 15.7;
Number.parseInt(fNumber)
console.log(Number.parseInt(fNumber))



let nombreUn = 10;
let nombreDeux = 5;

if ( nombreUn > nombreDeux) {
    alert("nombreUn est supérieur à nombreDeux")
}

nombreTrois = 10;
nombreQuatre = 10;

if (nombreTrois === nombreQuatre) {
    alert("nombreTrois est égal à nombreQuatre");
}

if( nombreUn !== nombreDeux) {
    alert("nombreUn n'est pas égal à nombreDeux")
}


for (let i = 0; i < 10; i++) {
    console.log(i)
}



let fruits = ["pomme", "banane", "poire"];

for ( index in fruits) {
    console.log(index)
}
let i = 0
while (i < 10) {
    i++
}

while (i < 10) {
    i+=2
}

for ( let i = 0; i < 10; i++) {
    if (i == 5) {
        alert("j'ai terminé cet exercice")
    }
}
