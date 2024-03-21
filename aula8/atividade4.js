const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});



rl.question("digite um número", (numberat2) => {
    if(numberat2 > 0){console.log("seu número é positivo!")} else if(numberat2 == 0){console.log("seu número é zero")}else{console.log("seu número é negativo!")}
    rl.close()
    })