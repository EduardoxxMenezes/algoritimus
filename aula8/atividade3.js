const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//PRIMEIRO

rl.question("Qual sua idade?", (Num1) => {
let rest = Num1 >= 18
if(rest == true){console.log("Você é maior de idade, waw.")}else{console.log("VOCÊ É MENOR DE IDADE, YAAY.")}
rl.close()
});


  