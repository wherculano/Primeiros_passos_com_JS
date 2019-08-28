function ligar(){
    document.getElementById('lamp').src="imagens/on.png"
}

function desligar(){
    document.getElementById('lamp').src="imagens/off.png"
}

function piscar(){
    let intervalo = 0 //frequencia com que a lampada vai piscar
    let contador = 0
    while(contador < 10){
        intervalo +=150
        //Evento de Sincronização:executa uma função após determinado tempo (em milissegundos)
        setTimeout("document.getElementById('lamp').src='imagens/on.png'", intervalo)
        intervalo +=150
        setTimeout("document.getElementById('lamp').src='imagens/off.png'", intervalo)
        contador++
    }
}