
/*
let preco = 13
let estilo = "fantasia" 
let lanchinho = "pipoca"
let print = console.log
if(estilo == "fantasia" && preco <= 15)
{
    print("Qual lanche você deseja?")
    print("BOM FILME!!!, aproveite NOSSA", lanchinho,"!")
}
else{print("encontre outro filme.")}
//SEGUNDO.
*/

let nomecompleto = "carlos fabiano"

let tipodejogo = "IN" 

let etapadojogo = "SF"

let categoria = 1

let quantidadedeingressos = 890.000

let precoingressos

let quantidadedeingressosqueoclientequer = 8 //vai multiplicar o preço do ingresso

let precobrasil = precoingressos * 4.10

let valortotal

let precototal = quantidadedeingressosqueoclientequer * precoingressos
if(tipodejogo == "IN"){
 if(etapadojogo == "SF")


 { if(categoria == 1){
    preco = 1320
   valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)
}


 else if(categoria == 2){ 
    
    preco = 880
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)
} 


 else if(categoria == 3){
    preco = 550
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


 else if(categoria == 4){ 
    preco = 220
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}}

  else if(etapadojogo == "DT"){if(categoria == 1){
    preco = 660
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}


 else if(categoria == 2){ 
    preco = 440
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )} 


 else if(categoria == 3){ 
    preco = 330
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )} 


 else if(categoria == 4){ 
    170
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}}
  else if(etapadojogo == "FI"){if(categoria == 1){ 
    preco = 1980
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )}


  else if(categoria == 2){ 
    preco = 1320
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 
 
 
  else if(categoria == 3){ 
    preco = 880
    valortotal = quantidadedeingressosqueoclientequer * preco
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 
 
 
  else if(categoria == 4){ 
    preco = 330
    valortotal = quantidadedeingressosqueoclientequer * preco
    
    print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )}}


}
else if(tipodejogo == "DO")if(etapadojogo == "SF")


{ if(categoria == 1){
   preco = 1320 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )
}


else if(categoria == 2){ 
   
   preco = 880 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )
} 


else if(categoria == 3){
   preco = 550 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


else if(categoria == 4){ 
   preco = 220 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}}

 else if(etapadojogo == "DT"){if(categoria == 1){
   preco = 660 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total",valortotal )}


else if(categoria == 2){ 
   preco = 440 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


else if(categoria == 3){ 
   preco = 330 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


else if(categoria == 4){ 
   170 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}}
 else if(etapadojogo == "FI"){if(categoria == 1){ 
   preco = 1980 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}


 else if(categoria == 2){ 
   preco = 1320 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


 else if(categoria == 3){ 
   preco = 880 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)} 


 else if(categoria == 4){ 
   preco = 330 * 4.10
   valortotal = quantidadedeingressosqueoclientequer * preco
   
   print("JOGO NACIONAL---- informações do cliente: ", nomecompleto,"etapa do jogo", etapadojogo,"categoria ", categoria,"quantidade de ingressos ", quantidadedeingressos, "disponiveis", "quantidade que você vai querer: ", quantidadedeingressosqueoclientequer, "preco do ingresso $", preco, "valor total", valortotal)}}

