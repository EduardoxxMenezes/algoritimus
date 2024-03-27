const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


const { text } = require("stream/consumers")

let nome =  "jefersom"
let idade = 72
let cidade = "Estradinha do sul"
let estudante = false

function noelle(){
    if(estudante == true)
    {
    console.log(`me chamo ${nome} tenho ${idade} anos e moro em ${cidade}, posso ser estudante`)}
    else
{console.log(`me chamo ${nome} tenho ${idade} anos e moro em ${cidade}, não sou estudante`)}}

    noelle()

    function KATIALACRADORA13(name,AGE,city,estudent){
        if(estudent == true)
        {
        console.log(`me chamo ${name} tenho ${AGE} anos e moro em ${city}, posso ser estudante`)}
        else
        {console.log(`me chamo ${name} tenho ${AGE} anos e moro em ${city}, não sou estudante`)}}

    KATIALACRADORA13("fabio",12,"nova estradinha do sul", true)

    //SEGUNDO

function batatas(numero1,numero2){teste1 = numero1 + numero2
return teste1
}
console.log(batatas(142, 873))

function alfaces(num1, num2){
teste4 = num1 <= num2
return teste4
}
console.log(alfaces(42334327))


function par(nust){a = (nust%2) == 0
    return a
}
teste3 = par(59056)
if(a == true){console.log("É PAR")}else{console.log("É IMPAR")}

function palavras(textos){
peso = textos.length
maiusculu = textos.toUpperCase()
console.log(textos)
console.log(maiusculu)
return  peso

}
console.log(palavras("cebolas felizes :d"))

//TERCEIRO
rl.question("difa um numero",(SEMO) => {
    rl.question("difa outro numero", (SEMA) => {
        SEMORRE = Number(SEMO)
        SEMATA = Number(SEMA)
function soma(){glasiele = SEMORRE + SEMATA; return glasiele}
function menos(){george = SEMORRE - SEMATA; return george}
function vezes(){grete = SEMORRE * SEMATA; return grete}
function diviso(){galeta = SEMORRE / SEMATA; return galeta}

console.log("SOMA: ", soma())
console.log("SUBTRAÇÃO: ", menos())
console.log("MULTIPLICAÇÃO: ", vezes())
console.log("DIVISÃO: ", diviso())
rl.close()
})
})


