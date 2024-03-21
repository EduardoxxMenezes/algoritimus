const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question("insira um número", (numerofinal1) => {
    rl.question("insira outro número", (numerofinal2) => {
        rl.question("insira mais um numero", (numerofinal3) => {
            numerofinal1 = Number(numerofinal1)
            numerofinal2 = Number(numerofinal2)
            numerofinal3 = Number(numerofinal3)
            let maior2 = 0
           
            if(numerofinal1 > numerofinal2 && numerofinal3)
            {
                maior = numerofinal1
            }
            else if(numerofinal2 > numerofinal3 && numerofinal1)
            {
                maior = numerofinal2
            }
            else if( numerofinal3 > numerofinal1 && numerofinal3)
            {
                maior = numerofinal3
            }
            

            console.log(maior, " É O MAIOR NÚMERO")
            rl.close()
        })
    })
})
