const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('digite o primeiro numero: ', (numero1) => {
    rl.question('digite o segundo numero: ', (numero2) =>{

        const resultado = Number(numero1) + Number(numero2);

        console.log(`a soma de ${numero1} e ${numero2} é ${resultado}`);
        rl.close();

    });
});