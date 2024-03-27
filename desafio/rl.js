const { constrainedMemory } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("QUANTAS CRIANÇAS DESEJA?", (responta) => {

    console.log(`APROVEITE SUAS ${responta} CRIANÇAS!!`)
    rl.close()
})
