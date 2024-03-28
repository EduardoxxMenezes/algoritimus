const { userInfo } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});



//primeiro
function alegria(num1,num2)
{let result = num1 + num2
return result}

console.log(alegria(7,12))


//SEGUNDO

function elevado(nusmero)
{let elevo = nusmero * nusmero
    return elevo}
console.log(elevado(84))


//TERCEIRO
function trecomuitolegal(nomedonegocio)
{ let  fabricio = nomedonegocio.length
    return fabricio}

console.log(trecomuitolegal("cebolas felizes"))

//QUARTO
function par(ovodeurangotango){ let parta = (ovodeurangotango%2) == 0
    let  tia = console.log("É PAR")
   let tio = console.log("É IMPAR")
       if(parta == true){ return tia}else{return tio}
   }
   par(13)
   
//QUINTO

function faire(celscius){resulto = celscius * (9/5) + 32
return resulto
}
console.log(faire(24))


//SEXTO
function tosemideiashj(c1,c2,c3,c4,c5){
    let maior 
if(c1 > c2 && c1 > c3 && c1> c4 && c1 > c5){maior = c1
return maior}
else if(c2 > c1 && c2 > c3 && c2> c4 && c2 > c5){maior = c2
return maior
} else if(c3 > c1 && c3 > c2 && c3> c4 && c3 > c5){maior = c3
        return maior
}else if(c4 > c1 && c4 > c2 && c4> c3 && c4 > c5){maior = c4
    return maior
}else if(c5 > c1 && c5 > c2 && c5> c3 && c5 > c4){maior = c4
    return maior}}
    console.log(tosemideiashj(123,6,32,888,5))

//SÉTIMO
rl.question("Como se chama?", (nosme) =>{
    rl.question("quantos anos tens?", (idade) => {
        rl.question("qual sua série favorita?", (serie) => {
            rl.question("qual a senha do cartão de credito da sua mãe?", (nadaimportante) =>{
                function sla(){
                    
                let frase = `OLÁ ${nosme}, você tem ${idade} anos e por algum motivo gosta de ${serie}!`
                return frase
                }
                sla()
                rl.close()
            })
        })
    })
})
//OITAVO
function gnomos(pequeno,pequenomenor){
    let pequenissimo
    if(pequeno > pequenomenor){return pequenissimo = pequenomenor}else{return pequenissimo = pequeno}
}
console.log(gnomos(67,13))
//NONO
function aaaa(pavralas){
    let pa = pavralas.toUpperCase()
    return pa
}
console.log("você quis dizer: ",aaaa("crianças felizes :d"))


//DÉCIMO

function raiz(batata){let chao = Math.sqrt(batata)
return chao
}
console.log(raiz(25))


//PRIMEIRO DO SEGUNDO
function verificarnumero(nust){
 let ze = console.log("o numero é zero")
 let mai = console.log("o numero é positivo")
 let men = console.log("o numero é negativo")
    if(nust == 0){return ze}else if(nust > 0 ){return mai}else if(nust < 0 ){return men}
}
verificarnumero()

//SEGUNDO DO SEGUNDO

rl.question("NOME DE USUARIO", (user) => {
    rl.question("Senha", (password) => {
        rl.question("Age", (age) => {
            
        })
    })
})