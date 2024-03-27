
const { constrainedMemory } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question("qual seu nome? ", (nome) => {
rl.question("qual sua senha: ", (senha) => {
    rl.question("confirme seu nome", (confnome) => {
        rl.question("confirme sua senha",  (confsenha) => {

            function negocio(){
                if (nome == confnome && senha == confsenha)
                {console.log("SEU NOME E SENHA ESTÃO CORRETOS")}
                else if(nome == confnome && nome != confsenha)
                {console.log("NOME CORRETO, SENHA INCORRETA")}
                else if(senha == confsenha && nome != confnome)
                {console.log("SENHA CORRETA, NOME ERRADO.")}
                else{console.log("nome e senha incorretos.")}
            
            }
            negocio()
            rl.close()
        })
    })
})
})

