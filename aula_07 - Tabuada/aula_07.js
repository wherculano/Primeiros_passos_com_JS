
for(let i = 1; i < 11; i++){
    document.write(`<p style="color:blue"><strong>Tabuada do ${i}</strong></p>`)
    for(let j = 1; j < 11; j++){
        document.write(`${i} x ${j} = ${i*j} </br>`)
    }
    document.write('-='.repeat(20))
}
