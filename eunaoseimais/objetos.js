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

filme.personagem = ["shrek","burro","criança"]
filme['elenco[0]'] = "xuxa"
console.log(`o filme se chama ${filme.nome} dirigido por ${filme.diretor} o elenco desse filme foi ${filme['elenco']}, ele foi lançado em ${filme['datadelac']}, os personagens são ${filme['personagens']} \n`)// para usar colchetes precisa de aspas.

console.log(filme)

let pessoa = 
{
    nome: "ashley",
    idade: "28 ",
    genmusic: "pop",
   
}

console.log(`ela se chama ${pessoa.nome}, tem ${pessoa.idade}, seu genero de musica é ${pessoa.genmusic}`)

let odio = {
    nome: "sim",
    outro: {
        nomes: "nao"
    }
   
}
console.log(odio.outro.nomes)

const sla = {
    nome: "katia",
    limgua: ["do amor", "sla"]
}
console.log(sla.limgua[0])

sla.naosei = "verdade"
console.log(sla.naosei)
//assim para adicionar no objeto.

const user = {
    nome: "fabio",
    idade: 32,
    email: 'fabio@gmail.com',
    cidade: "islamdia"
}

const newuser = {
    ...user,  //assim para copiar as propriedades de outro objeto.(spread), também funciona em arrays
    nome: "anderssom",
    idade: 2

}
console.log(newuser)


function amizade(pessoa)
{
   let amiguinho = {
    ...pessoa,
    nome: "katia",
    idade: "simmmm",
    genmusic: "punk rock",
    comidafav: ["pão","cebolas"],
    muitoeu: {
        idade_da_minha_best_antonia: "vimte treis",
        nome_da_minha_best_antonia: "antonia"
    }
   }
   console.log("meu nome é ", amiguinho.nome , " minhas comidas preferidas são ", amiguinho.comidafav[1]," e ", amiguinho.comidafav[0] , ", minha melhor amiga se chama ", amiguinho.muitoeu.nome_da_minha_best_antonia , " ela tem ", amiguinho.muitoeu.idade_da_minha_best_antonia, " anos!")
}

amizade()