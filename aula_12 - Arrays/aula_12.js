var times = ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos']

console.log(times)
console.table(times)
console.log('Tamanho: ',times.length)

for(t of times.values()){
    console.log(`[${times.indexOf(t)}] ${t}`) //[indice] time
}

times.push('Portuguesa') //adiciona na ultima posição
console.log(times)

times.sort() //ordem crescente
console.table(times)

times.reverse()//ordem decrescente
console.table(times)

console.table(times.pop())//printa o ultimo elemento e remove ele da lista
console.log(times.shift())//printa o primeiro elemento e remove ele da lista

console.table(times)

times.splice(1,1) //(indice incial, quantidade de elementos a serem excluidos a partir do indice)
console.log(times)
