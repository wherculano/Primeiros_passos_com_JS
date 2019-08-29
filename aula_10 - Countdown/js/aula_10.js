let check = false; // variavel de controle que impedirá várias chamadas ao som

function xequeMate(){
    if(check == false){
        let timer_1 = setInterval(function(){start()}, 1000) //executará a funcao start a cada 1s
        let timer_2 = setTimeout(function(){end()}, 13200)//10s do contador + 3.2s do gif
        let count = 10 //variavel q sera usada como contador no navegador

        function start(){//montagem do contador
            soundBeep();
            document.getElementById('time').innerHTML = count;
            if(count == 0){
                clearInterval(timer_1)//interrompe a execução do setInterval
                soundThunder();
                document.getElementById('fire').src = './imagens/explosion.gif'
                document.getElementById('time').innerHTML = 'GAME OVER'
            }
            count--;
        }
        check = true; //neste momento nao será mais possivel tocar o som ao clicar na imagem
    }
}

function soundThunder(){
    let thunder = new Audio(); //permite usar audios
    thunder.src = "./sons/Thunder_Crack.mp3"
    thunder.play();
}

function soundBeep(){
    let beep = new Audio(); 
    beep.src = "./sons/Beep_Short.mp3";
    beep.play();
}

function end(){
    document.getElementById("fire").src = "./imagens/clean.png";
}