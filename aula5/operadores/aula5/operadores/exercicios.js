//adicao.
let a = 1
let b = 1
console.log("1 + 1: ",1 + 1)

//média

let nota1 = 7.5
let nota2 = 8.9
let nota3 = 9.999999999999999999999976867
let notas = nota1 + nota2 + nota3 
console.log("notas: ",notas / 3)

//conversão de temperatura

let celcius = 20
let fahrenheit = celcius * 9/5 + 32
console.log("fahrenheit: ",fahrenheit)

//Area de um retangulo

let base = 4
let altura = 2
let area = base * altura
console.log("area: ",area)


//concatenação

const name = "fabio "
const surname = "clarice"
let fullname = name + surname
console.log("fullname: ",fullname)

//troca de tipos 

let num1 = 17
let talk1 = "90:"

var num2 = num1.toString()
var talk2 = Number(talk1)

console.log("troca de tipos: ",num1,talk1)
console.log(typeof num2, typeof talk2)