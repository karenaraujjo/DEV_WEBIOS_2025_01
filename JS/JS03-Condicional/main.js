let atividadeEntregue = true
let diaFinalEntregue = 19
let mensagemParabéns = 'Parabéns, valeu fera'
if(atividadeEntregue == true ){ //true  // == Esse sinal significa comparação
    console.log(mensagemParabéns)
    if(diaFinalEntregue <= 13){
        console.log("Entregou a atividade na data e sua nota é 10")
    }else{
        console.log("Entregou a atividade fora da data prevista e será retirado dois pontos da nota final")
    }


}else if(atividadeEntregue == false ){ //false 
    console.log("Ops, você ainda não entregou a atividade")
}else{ // Resposta alternativa
    console.log("Você inseriu uma informação invalida")
}



