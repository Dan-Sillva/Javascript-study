const obj1 = {
    nome: 'danilo',
    idade: 20,
    habilidades: 'JS, HTML'
}

const obj2 = {
    nome: 'danilo',
    idade: 20,
    habilidades: 'JS, HTML'
}

/*
    NOTA: Voltar e implementar ordenação das chaves de um objeto, para ter uma comparação
    mais eficiente.
 */

export function compareObj(obj1, obj2){
    return(
        JSON.stringify(obj1) === JSON.stringify(obj2)
    )
}