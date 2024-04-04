let array
console.log('a. ', array)//a.UNDEFINED

array = null
console.log('b. ', array)//b.null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)//c.11

let i = 0
console.log('d. ', array[i])//d.3

array[i+1] = 19
console.log('e. ', array)//e. [3,19,4,5,6,7,8,9,10,11,12,13]

const valor = array[i+6]
console.log('f. ', valor)//f.9

//SEGUNDO

const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);// Todos os A que o usuario colocar vai se tornar I e todas as letras estarão maiusculas., também aparecerá a quantidade de letras.

//SUBI NO ONIBUS EM MIRROCOS26