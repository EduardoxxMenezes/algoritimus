const { default: test } = require('node:test');
const readline = require('readline')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    rl.question("QUAL SUA IDADE", (ida) => {
        console.log("voce tem ", ida, "anos ")
    })