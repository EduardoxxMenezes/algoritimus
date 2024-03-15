let age = 15
let bestage = 9
let print = console.log
let compare = age > bestage
let noncompare = age - bestage
let voncompare = bestage - age
if(compare == true)
{
print("sua idade é maior do que o seu amigo! com apenas", noncompare, "anos de diferença!")
}
else 
{
    if(age == bestage)
    {
        print("AMBOS TEM A MESMA IDADE!")
    }
    else
    {
    print("sua idade é inferior a de seu amigo por", voncompare, "anos!")
    }
}

//SEGUNDA.

let par = 2
let teste = 25%2
print(teste)
//todos os números que são divididos por 0 não terão resto algum quando divididos por 2
//caso for um número impar sobrará 1 quando dividos por 2.

//TERCEIRA.

let userage = 15
let monthsage = userage*12
let daysage = userage*365
let hoursage = userage*8760
 print("você tem", userage, "anos", monthsage, "meses", daysage, "dias e", hoursage, "horas.")

 //QUARTO
let a = 24
let b = 12
let divisivel = a%b
let diviso = divisivel == 0
let divisival = b%a
let divisa = divisival == 0

 print("o primeiro é maior que o segundo?", a > b)
 print("o primeiro é igual ao segundo", a == b)
 print("o primeiro é divisivel pelo segundo", diviso)
 print("o segundo número é divisivel pelo primeiro? ", divisa)
 if(a>b)
 {print("O PRIMEIRO É MAIOR QUE O SEGUNDO!")}
 else
 {
    if(a==b)
    {print("AMBOS SÃO IGUAIS")}
    else
    {
    print("o segundo é maior que o primeiro")}
 }
 if(diviso == true && divisa == true)
 {print("Ambos os números são divididos pelo outro!")}
 if(diviso == true && divisa == false)
 {print("apenas o primeiro é divisivel pelo segundo.")}
 if(diviso == false && divisa == true)
 {print("apenas o segundo numero é divisivel pelo primeiro.")}
 if(diviso == false && divisa == false)
 {print("nenhum dos numeros é divisivel pelo outro...")}
 length:2

 
