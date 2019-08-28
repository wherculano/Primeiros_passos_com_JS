let intervalo = 3000 //milissegundos

function slide_1(){
    document.getElementById('banner').src='imagens/foto1.png'
    setTimeout("slide_2()", intervalo)
}

function slide_2(){
    document.getElementById('banner').src='imagens/foto2.png'
    setTimeout("slide_3()", intervalo)
}

function slide_3(){
    document.getElementById('banner').src='imagens/foto3.png'
    setTimeout("slide_1()", intervalo)
}



