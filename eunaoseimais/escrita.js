let a = {
    nome: "katiana",
    apelido: ["kati","kaka","ana"]
}
let b = {
    ...a,
    apelido: ["rolha de poço", "burra","retardada"]
    
}
let k = a.apelido.splice(a.apelido.length - 2)
let f = b.apelido.splice(b.apelido.length - 2)
let t = k.join(", ")
let g = f.join(", ")
console.log(`ola! me chamo ${a.nome}, mas pode me chamar de ${t} ou ${a.apelido[a.apelido.length - 1]}`)
console.log(`ola! me chamo ${b.nome}, mas pode me chamar de ${g} ou ${b.apelido[b.apelido.length - 1]}`)
//SEGUNDA
let joana = {
    nome: "joana",
    idade: 16,
    profissao: "desempregada"
}
let marcio = {
    nome: "marcio",
    idade: 28,
    profissao: "vendedor de rifas"
}
function listo(objetos,nomes)
{
    let listado = [marcio]
    let tamanho2 =  listado.length
    let caracteres = listado[0].length
    let caracteres2 = listado[2].length
    console.log(listado[0],caracteres, listado[1],listado[2], caracteres2)
}

//TERCEIRO
let carrinho = []

let fruta1 = {
    nome: "pera",
    disp: true
}
let fruta2 = {
    nome: "tomate",
    disp: true

}

let fruta3 = {
    nome: "caqui",
    disp: true
}

function carrinhar(fruto)
{

    carrinho[carrinho.length] = fruto
    return carrinho
}

console.log(carrinhar(fruta1))
console.log(carrinhar(fruta2))
console.log(carrinhar(fruta3))

//SEGUNDO

