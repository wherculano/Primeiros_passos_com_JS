var etanol, gasolina

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(',','.'))
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(',','.'))
    if(etanol < (0.7 * gasolina)){
        document.getElementById('status').src="imagens/etanol.png"
    }else{
        document.getElementById('status').src="imagens/gasolina.png"
    }
}

function limpar(){
    document.getElementById('status').src="imagens/neutro.png"
}