//objetos

const sim = 
{ nome: "dor",
 funcao: ["sofrer", "odiar"],
 motivo: function(){console.log("sim")}//função dentro do objeto é método

}
console.log(sim.motivo)//ps. pode haver um objeto dentro do objeto.
const filme = 
{
    elenco:  ["Eddie murph", "Mike Myers", "chris miller"],
    nome: "shrek",
    diretor: "Andrew Adamson",
    datadelac:"22 de julho de 2001",
    assisti: true
    
}
console.log(`o filme se chama ${filme.nome} dirigido por ${filme.diretor} o elenco desse filme foi ${filme['elenco']}, ele foi lançado em ${filme['datadelac']}`)// para usar colchetes precisa de aspas.

let pessoa = 
{
    nome: "ashley",
    idade: "28 ",
    genmusic: "pop",
   
}

console.log(`ela se chama ${pessoa.nome}, tem ${pessoa.idade}, seu genero de musica é ${pessoa.genmusic}`)

let odio = {
    nome: "sim"
    outro: {
        nomes: "nao"
    }
    console.log(odio.outro.nomes)
}