const num = [1,2,3,4,5]
const achar = 4
function pega(nust){
    return nust == achar
}
const achei = num.filter(pega)

console.log(achei)