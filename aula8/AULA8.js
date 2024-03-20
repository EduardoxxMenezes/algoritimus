let somoshlings = "felizes"
let smathling = 8.999999999999999999999999999999999999999999999999999999999
console.log(`ARGUMENTOS ${somoshlings}`)
console.log(`crianças ${somoshlings} são superiores`)
console.log(smathling.toFixed(2))

//PROMPT ==== AAAAAAAAA\\
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("Diga-me sua idade, e eu direi-lhe a verdade.",(idade) => {if(idade >= 18)

{console.log("Então você tem ", idade, " ... você não é digno.")
}
else{ console.log("SAI DAQI.")}
rl.close()
});
rl.question("qual seu nome, jovem?",(nome) => {console.log("olá, ", nome, " um dia você saberá da verdade...")
rl.close()
});

