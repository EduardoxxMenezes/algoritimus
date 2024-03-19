//PRIMEIRO
const respostadousuario = "90"
const numero = Number(respostadousuario)
if(numero % 2 === 0 )
{console.log("passou no teste")}
else
{console.log("Não passou no teste")}
//A) o código analisa se o número é par e diz se o usuario passou ou não no teste.
//B) o usuario passaria no teste se os números forem pares.
//C) a mensagem retornaria "não passou" caso o usuario colocasse numeros impares.

//SEGUNDO.

let fruta = "pêra"
let preco 
switch (fruta) {
    case "laranja":
        preco = 3.5
        break;
        case "maçã":
            preco = 2.25
        break;
        case "Uva":
            preco = 0.30
        break;
        case "pêra":
            preco = 5.5
            break;
        default:
            preco = 5
            break;

            
}
console.log("o preço da fruta", fruta, "é R$", preco)
//A) O codigo serve para avisar os preços de cada fruta.
//B) O preço da fruta maçã pe R$2.25
//C) Irá aparecer o preço de "default" que seria 5
//TERCEIRO.

const numero2 = Number(("50"))

if( numero2 > 0 ) {console.log("Esse número passou no teste")
 let mensagem = "esta mensagem é secreta!"
}
console.log(mensagem)
//A) a primeira linha está declarando uma variavel e tornando-a um número.
//B) o usuario receberá um erro em qualquer circuntancia.
//c) ele não encontrará a mensagem