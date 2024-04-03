
const exemplo = ["c","e","b","o","l","a","s",0,true,]
//----------------0,--1---2---3---4---5---6--7--8---\\
console.log(exemplo[3],exemplo[8])
//para acessar um item faz assim

const anao = ["boliviano", "argentino", "noruegues", "estradinha do norte","sapucaiense"]

console.log("qual espécie de anão você deseja? temos: ", anao," sinceramente, o especial da casa é ", anao[4], "!")
console.log(anao.length, anao[3].length)

const serie = ["breaking bad", "brooklyn nine nine"]
 serie.includes("breaking bad")//true
 serie.includes("shrek")//false
 

 const exemplo2 = [1,2,3]
 exemplo2.push(4)
 //adiciona elementos no fim.
 console.log(exemplo2)
 exemplo2.pop()
 //retira o ultimo elemento
 console.log(exemplo2)


const  peixes = ["salmão", 'peixe palito', "peixe pau"]
peixes.pop
console.log(peixes)


const letras = ["a","b","c","d","e","f"]
letras.splice{2,3}//vai remover 3 LETRAS após o indice 2.
console.log(letras)
