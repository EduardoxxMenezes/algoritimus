const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});


function ya(altura, largura){
    let ne = altura * largura
    console.log(`area é:  ${ne}`)
}

ya(89,12)
ya(8,9)
ya(15,6)
ya(965,9)
ya(24353,9)
ya(8,65593)
ya(8,44449)
ya(8,2232329)
ya(112128,9)
function hello(mensagem){console.log(mensagem) }

hello("HELLO")
hello("world")
hello("cebolas tristes rodam e rodam a estatua.")

function nome(nome){
    console.log(nome)
}
nome("fabio")
setTimeout(function(){
nome("katia")
}, 5000);
nome("fabiana")

function notas(nota1,nota2,nota3){ let notafinal = (nota1 + nota2 + nota3)/3 
console.log(`a sua média é: ${notafinal}`)}

notas(10,5,3)

function parto(mae){
    mae = Number(mae)
let a = mae%2
let b = a == 0
if(b == true)
{ 
    console.log("PARABENS, seu numero é par, que impressionante, waw, todos nos super nos importamos com você.")
}
else if (b == false)
{console.log("seu numero é impar.")}}

rl.question("qual se numero", (numero) => {
    parto(numero)
    rl.close()
})