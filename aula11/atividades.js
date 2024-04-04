let a = 12
let b = 2
print = console.log
if(a > 0 && b > 0){console.log(a + b)}
else{console.log("algum número é negtivo")}

//SEGUNDO

if((a%2 == 0) || (b%2 == 0)){print(a * b)}else{print("nenhum dos números é par.")}

//TERCEIRO

if(b != 0){print(a/b)}else{print("o divisor é zero")}

//QUARTO
lista = ["criança", "feliz", "chora","canto"]
fatima = lista.length

 
while(fatima > -1){
console.log(lista[fatima])
fatima = fatima - 1}




// QUINTA <3
lista.pop()
lista.splice(0,1)
print(lista)

//SEXTO

function imprime(str){
    
    const list = ["a","e","i","o","u"]
        str.toLowerCase()
        return str.split('').filter(char => list.includes(char)).join('');
}
console.log(imprime("SE MATA DESGRAÇA"))
//SETIMO


function imprimes(str){
    const list = ["a","e","i","o","u"]
        str.toLowerCase()
        return str.split('').filter(char => list.includes(char) && char >= 'a' && char <= 'z').join('');
}
console.log(imprimes("EU ODEIO VIVER AAAAAAAAAAAAAAAAAA"))
  
console.log(fabio)
//OITAVO
if(lista.length >= 2)
{ata = lista.length
    console.log("o ultimo elemento é: ", ata, "ele é: ", lista[ata])
}else{console.log("a lista tem menos de 2 numeros")}


//NONO
if(lista.length > -1)
{console.log("o primeiro objeto é: ", lista[0], "de indice 0")}

