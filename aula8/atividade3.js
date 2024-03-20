const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

//PRIMEIRO
rl.question("Qual atividade você deseja?", (numberactivity) => {
if(numberactivity == 1)
{
rl.question("Qual sua idade?", (Num1) => {
let rest = Num1 >= 18
if(rest == true){console.log("Você é maior de idade, waw.")}else{console.log("VOCÊ É MENOR DE IDADE, YAAY.")}
rl.close()
});
}
else if(numberactivity == 2)
{
rl.question("digite um número", (numberat2) => {
if(numberat2 > 0){console.log("seu número é positivo!")} else if(numberat2 == 0){console.log("seu número é zero")}else{console.log("seu número é negativo!")}
})
}
else if(numberactivity == 3 )
{
    rl.question("digite a senha(a senha não é 8590 ;))", (senhanum) => {
senhanum = Number(senhanum)
        const senha = 8590 
        if(senhanum == senha){console.log("CORRETO.")} else{console.log("INCORRETO.")}
    })  
}
else if(numberactivity == 4)
{
    rl.question("digite o primeiro numero", (conta1) => {
        r1.question("digite a operação", (conta2) => {
            r1.question("digite o segundo numero", (conta3) => {
               conta1 = Number(conta1)
               conta3 = Number(conta3)
                if(conta2 == "+"){console.log(conta1 + conta3) }else if(conta2 == "-"){console.log(conta1 - conta3)} else if(conta2 == "*"){console.log(conta1 * conta3)}else if(conta2 ==
                 "/"){console.log(conta1/conta2)}else{console.log("ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.ERROR.")}
            })
        })
    })
}
else if(numberactivity == 5)
{
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
                if(numerofinal2 > numerofinal3 && numerofinal1)
                {
                    maior = numerofinal2
                }
                if( numerofinal3 > numerofinal1 && numerofinal3)
                {
                    maior = numerofinal3
                }
                
                console.log(maior, " É O MAIOR NÚMERO")

            })
        })
    })
}
rl.close()
})
