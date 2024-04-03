const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("diga me seu nome", (nomes) => {
    console.log(nomes.replaceAll("a","i"))
    rl.close()
    })
    