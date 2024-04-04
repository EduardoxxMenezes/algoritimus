const read = require('readline-sync')

const nome = read.question("qual teu nome?")
const idade = read.question("qual a sua idade?")
const lugar = read.question("Onde voce mora?")
const desnecessario = read.question("qual o numero do cartao de credito da sua mae?")

console.log("obrigado pela sua cooperação! " + nome)