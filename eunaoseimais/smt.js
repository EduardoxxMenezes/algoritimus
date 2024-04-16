
const read = require('readline-sync')

//1

for(let i = 0; i < 11; i++){console.log(i)}

//2

for(let a; a < 11; a++)
{if(a%2==0){console.log(a)}}

//3

for(let k = 0; k < 11; k++){console.log(k*5)}

//4
let b = 0;
for(let AAAAA = 0; AAAAA < 11; AAAAA++)
{
    b += AAAAA
    console.log("aham",b)
}

//5
let calculo
for(let dor = 0; dor < 6; dor++)
{
   let numeros = Number(read.question("Diga um número"))
   calculo = numeros + calculo
}
let resultado = calculo/5
console.log("A MÉDIA DOS NÚMEROS É: "+ resultado)

//6
for(let cavalos = 2; cavalos < 2; cavalos = cavalos +2)
{
   if(cavalos%3 != 0){console.log(cavalos)}
}
//7

for(let sla = 0; sla <101; sla++)
{
    if(sla%3 == 0 && sla%5 == 0){console.log("FIZZBUZZ")}
    else if(sla%5 == 0 ){console.log("BUZZ")}
    else if(sla%3 == 0){console.log("FIZZ")}
    else{console.log(sla)}
}
//8'
let menor = 0 
let maior = 0
for(let ka = 0; ka < 11; ka++)
{let pessoa = read.question("DIGA UM NUMERO")
    if(pessoa < menor || menor == 0){menor == pessoa}
    if(pessoa > maior){maior = pessoa}

}
console.log("O MENOR NÚMERO FOI: "+ menor + " E O MAIOR NÚMERO FOI: "+ maior)

//9
let fred
let fatorial = read.question("DIGA OUTRO NÚMERO")
for(let crianca = 0; crianca <= fatorial; crianca++)
{
fred = fred * crianca

}
console.log(fred)

//10
let termoant = 0
let termoatu = 0
for(let greg = 0; greg < 11; greg++)
{   console.log(termoatu)
    const proximoter = termoant + termoatu
    termoant = termoatu
    termoatu = proximoter
    
}

//11
let resposta = Math.floor(Math.random() * 100)+1
let chances = 0
while(chances != resposta)
{
    chances = read.question("diga um numero")
    if(chances < resposta){console.log("maior")}
    else if(chances > resposta){console.log("menor")}
}
console.log("você ganhou.")

//12

let escolha = read.question("CARA OU COROA? (coloque fim para acabar!)")
escolha = escolha.toLocaleLowerCase()
let bot = Math.random() * 100
let percas = 0
console.log(bot)
let final = ""
if(bot > 50)
{
 final = "cara"
}
else
{
    final = "coroa"
}
while(escolha != "fim")
{
    if(escolha == "cara" && bot == "coroa"){console.log("VOCÊ PERDEU"); percas = percas + 1}
    else if()
}
