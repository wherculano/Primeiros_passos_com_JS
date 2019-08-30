let naipes = ['♥', '♦', '♣', '♠']
let faces = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

let res = document.createElement('p') //cria uma nova tag <p>

function sortear(){
    let naipe = naipes[Math.floor(Math.random() * naipes.length)]//naipes[de 0 a 3]
    let face = faces[Math.floor(Math.random() * faces.length)]//faces[de 0 a 12]
    let carta = face.concat(naipe) //concatanando os valores. A + ♦ por exemplo. faces[0]+naipes[1]
    res.innerHTML = `<h2>Naipe: ${carta}</h2>` //atribui o valor do naipe na tag <p>naipe: X</p>
    document.body.appendChild(res) //inclui a tag no corpo da pagina
}
