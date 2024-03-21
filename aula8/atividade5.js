const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});



rl.question("digite a senha(a senha não é 8590 ;))", (senhanum) => {
    senhanum = Number(senhanum)
            const senha = 8590 
            if(senhanum == senha){console.log("CORRETO.")} else{console.log("INCORRETO.")}
        rl.close()
        })  