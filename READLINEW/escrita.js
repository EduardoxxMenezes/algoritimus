const read = require('readline-sync')

let email = read.question("Por favor, insira seu E-mail.")
let nome = read.question("Como se chama?")
console.log(`O E-mail ${email} foi cadastrado com sucesso! bem vindo(a) ${nome}`)

//SEGUNDO.
let comidas = ["frango","massa quatro queijos", "massa carbonara","sushi", "galinha descabelada"]
console.log(comidas)
console.log("estas são minhas comidas preferidas \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas [4], "\n")
costas = read.question("E VOCE? qual sua comida favorita?? diga nos comentarios!")
comidas[1] = costas
console.log("estas são minhas comidas preferidas \n", comidas[0], "\n", comidas[1], "\n", comidas[2], "\n", comidas[3], "\n", comidas [4], ", ata.")

// TERCEIRO
li = []
sim = read.question("diga me suas tarefas, e eu vou ajudar!")
sim2 = read.question("segunda tarefa!")
sim3 = read.question("terceira tarefa!")
li.push(sim,sim2,sim3)
console.log(li)
nao = read.question("digite o numero de quais você completou!")

nao = Number(nao)
li.splice(nao,1)
console.log(li)