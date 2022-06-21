let test = 'salve salve'

let pessoa1 = {
    nome:'Danilo',
    idade:16
}

let pessoa2 = {
    nome:'Santos',
    idade:13
}

let lista =[pessoa1, pessoa2]

function comparar(pessoa1, pessoa2){
    return pessoa1.idade < pessoa2.idade ? (pessoa2.nome + ' é mais velha') : (pessoa1.nome + ' é mais velha')
}

console.log(lista)
console.log(comparar(pessoa1, pessoa2))

