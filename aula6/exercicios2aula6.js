const bool1 = true
 const bool2 = false 
 const bool3 = !bool2

let resultado = bool1 && bool2 
console.log("a. ", resultado)
//false

resultado = bool1 && bool2 && bool3
 console.log("b. ", resultado)
 //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
//true

console.log("d. ", typeof resultado)
//boolean
//dois

let primeiroNumero = "100" 
let segundoNumero = "43"

const soma = primeiroNumero + segundoNumero

console.log(soma)

console.log("TIRA AS ASPAS DAS VARIAVEIS O ANTA.")

let num = Number(primeiroNumero)

let num2 = Number(segundoNumero)

console.log(num + num2)