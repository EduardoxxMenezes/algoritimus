
const read = require('readline-sync');

//CADASTRAR DOADOR;
let doadores = []
function adicionarDoador()
{
    let nomeNew = read.question("INSIRA SEU NOME")
    let idadeNew = read.question("INSIRA SUA IDADE")
    let pesoNew = read.question("INSIRA SEU PESO")
    let tipoSanguineoNew = read.question("INSIRA SEU TIPO SANGUINEO")
    let ultimaDoacaoNew = read.question("QUANDO FOI SUA ULTIMA DOAÇÃO?")
    doadores.push({
        nome: nomeNew,
        idade: idadeNew,
        peso: pesoNew,
        tipoSanguineo: tipoSanguineoNew,
        ultimaDoacao: ultimaDoacaoNew
                 })
}

//APRESENTAR DOADORES;

function listaDeDoadores()
{
    let quantidade = doadores.length
    console.log("---------------------------------------------------------")
    console.log("                      LISTA DE DOADORES   ")
    console.log("---------------------------------------------------------")
    console.log("NOME      | IDADE | PESO | TIPO SANGUÍNEO | ULTÍMA DOAÇÃO")
    for(let a = 0; a < quantidade; a++)
    { console.log(` ${doadores[a].nome} | ${doadores[a].idade} | ${doadores[a].peso} | ${doadores[a].tipoSanguineo} | ${doadores[a].ultimaDoacao}`)}
    console.log("---------------------------------------------------------")

}



//MENU PRINCIPAL;
let opt 
let tipo
let data
while(opt != "5")
{
    opt = read.question("1- Cadastrar doador. \n 2- Lista de doadores. \n 3- Buscar doador por tipo sanguineo \n 4- Buscar doador por data de ultima doação \n 5- sair. \n ESCOLHA:")
switch(opt)
{
    case "1": adicionarDoador()
    break;
    case "2": listaDeDoadores()
    break;
    case "3":  tipo = read.question("QUAL TIPO SANGUINEO DESEJA?")
              acharDoadorPorTipoSanguineo()
    break;
    case "4":  data = read.question("QUANDO FOI A ULTIMA DATA")
             acharDoadorPorDATA()
    break;
    case "5": console.log("DESLIGANDO SISTEMA...")
    break;
    default: console.log("Alternativa não reconhecida, tente novamente.")
    break;    
}}
//ACHAR DOADOR DO TIPO SANGUINEO;
function acharDoadorPorTipoSanguineo()
{   
    let quantidade = doadores.length
    let certos = []
    for(let k = 0; k < quantidade; k++)
    {
     if(doadores[k].tipoSanguineo == tipo){certos.push(doadores[k])}
    }

    console.log("----------------------------------------")
    console.log(" DOADORES COM TIPO SANGUÍNEO COMPATIVEIS")
    console.log("----------------------------------------")
    console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ULTIMA DOAÇÃO")
    for(let j = 0; j < certos.length ; j++)
    { console.log(` ${certos[j].nome} | ${certos[j].idade} | ${certos[j].peso} | ${certos[j].tipoSanguineo} | ${certos[j].ultimaDoacao}`)}
}
//ACHAR DOADOR DO TIPO DATAS;
function acharDoadorPorDATA()
{   
    let quantidade = doadores.length
    let certos = []
    for(let k = 0; k < quantidade; k++)
    {
     if(doadores[k].ultimaDoacao == data){certos.push(doadores[k])}
    }
    let doadoresEspecificosTamanho = certos.length

    console.log("----------------------------------------")
    console.log(" DOADORES COM TIPO SANGUÍNEO COMPATIVEIS")
    console.log("----------------------------------------")
    console.log("NOME | IDADE | PESO | TIPO SANGUÍNEO | ULTIMA DOAÇÃO")
    for(let j = 0; j < certos.length ; j++)
    { console.log(` ${certos[j].nome} | ${certos[j].idade} | ${certos[j].peso} | ${certos[j].tipoSanguineo} | ${certos[j].ultimaDoacao}`)}
}