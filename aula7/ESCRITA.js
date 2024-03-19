//PRIMEIRA.
let idade  = 25
let print = console.log
if (idade >= 18 && idade <= 90) {print("Você poderá dirigir!")} else{print("Você não poderá dirigir.")}
//SEGUNDO.
let turno 
if(turno == "M"){ print("BOM DIA!")}else if(turno == "V"){ print("BOA TARDE!")}else if(turno == "N"){print("BOA NOITE!")}
//TERCEIRO
switch(turno){
    case "M":
        print("BOM DIA!")
        break;
    case "V":
        print("BOA TARDE!")
        break;
    case "N":
        print("BOA NOITE!")
        break;
}
//QUARTO

let preco
let estilo

if(estilo == "fantasia" && preco <= 15){print("Seu amigo irá com você!")}else{print("Você está condenado a se afogar em sua propria solidão e suportar-la até seus ultimos dias, ou você pode escolher outro filme.")}