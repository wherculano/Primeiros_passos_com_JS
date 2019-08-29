let opc_pedra = document.getElementById('pedra')
let opc_papel = document.getElementById('papel')
let opc_tesoura = document.getElementById('tesoura')

function jogar(){
    if(opc_pedra.checked == false && opc_papel.checked == false && opc_tesoura.checked == false){
        alert("Selecione uma opção!")
    }else{
        let sorteio = Math.floor(Math.random() * 3)
        switch(sorteio){
            case 0:
                document.getElementById('pc').src = './imagens/pcpedra.png'
                break
            case 1:
                document.getElementById('pc').src = './imagens/pcpapel.png'
                break
            case 2:
                document.getElementById('pc').src = './imagens/pctesoura.png'
                break
        }
        if ((opc_pedra.checked == true && sorteio == 0) ||
        (opc_papel.checked == true && sorteio == 1) ||
        (opc_tesoura.checked == true && sorteio == 2)){
            document.getElementById('placar').innerHTML = '<strong>Empate</strong>'
        } else if ((opc_pedra.checked == true && sorteio == 2) ||
        (opc_papel.checked == true && sorteio == 0) ||
        (opc_tesoura.checked == true && sorteio == 1)){
            document.getElementById('placar').innerHTML = '<strong>Jogador Venceu!</strong>'
        }else{
            document.getElementById('placar').innerHTML = '<strong>Computador Venceu!</strong>'
        }
    }
}

function resetar(){
    document.getElementById('pc').src = "./imagens/pc.png"
    document.getElementById('placar').innerHTML = ''
}