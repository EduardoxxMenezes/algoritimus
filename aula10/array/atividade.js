let sla = [1,2,3,4,5,6]
let aham = sla.length
console.log(sla,aham)
sla.push(7)
sla.splice(2,2)
aham = sla.length
console.log(sla,aham)

//FINAL

let lista = ["applejack", "rainbow dash", "twilight", "pinkie pie", "rarity", "flutter shy"]
function MAGIA(){
let alegria = lista.length
let cavalo = Math.floor(Math.random() * alegria)
return lista[cavalo]

}
console.log(MAGIA())