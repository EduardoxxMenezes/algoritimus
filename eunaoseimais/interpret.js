const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
​
//vai ser impresso : matheus natchergaele, VIRGINIA, globo, 14h

//SEGUNDO
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//vai ser impresso: {nome: "juca", idade: 3, raca: "SRD"}, {nome: "juba", idade: 3, raca: "SRD"},{nome: "jubo", idade: 3, raca: "SRD"}

//a sintaxe dos 3 pontos é o "spread" e ele pega todas as informações de outro objeto, copia e traz para o seu novo objeto.

//TERCEIRO

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
//ele vai printar "false" e "undefined"
//sairá este valor pois não há nenhuma propriedade com este nome.



