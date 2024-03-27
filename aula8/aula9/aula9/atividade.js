

function calculo(a,o)
{
    sla = a + o 
    return sla

}
soma = calculo(23,184)
console.log(soma + 549)

//SEGUNDO

const calculararea = function(as,bs){const area = as * bs
return area
}

const areacalculada = calculararea(2,3)
console.log(areacalculada)

//ARROW FUNCTION
const calvalo = (lagrimasMatutinas, lagrimasNoturnas) => {const sim = lagrimasMatutinas * lagrimasNoturnas
return sim }
console.log(calvalo(86,32))

const notas = function(no1,n2,no3){let apanaue = (no1 + n2 + no3)/ 3
return apanaue}
const resultrando = notas(7,9,1)
console.log(resultrando)

const cebolas = (valor) => {valor = Number(valor)
e = valor%2
fabio = e == 0 
if(fabio == true ){console.log("é par")}else if( fabio == false){console.log("não é par")}
else{console.log("sei la, se vira.")}
}

cebolas(32)