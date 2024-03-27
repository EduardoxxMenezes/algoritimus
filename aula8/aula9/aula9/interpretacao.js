//PRIMEIRO
function minhafuncao(variavel){
    return variavel * 5
}
console.log(minhafuncao(2))
console.log(minhafuncao(1))
//sempre será impresso 10 e 5
//se mudasse os 2 consoles.log apareceria 10 e 50

//SEGUNDO
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
//esta função pede um texto do usuario e inclue "cenoura" ao argumento.
//provavelmente ficará: true, true, false.

