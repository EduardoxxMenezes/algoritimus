//variaveis criadas dentr ode funções são escopos locais, as criadas no codigo são escopos globais
const a = 1
function exemplo(){ const b = 8
    console.log(a)
    console.log(b)
}

exemplo()
console.log(a)
//console(b) (VAI DAR ERRO.)
function areas(altura, largura){
    area = altura * largura
    return area
}
console.log(areas(8,34))

function treco(a,b){return a + b;}
let resultado = treco(3,5)
resultado
console.log(resultado + 1)