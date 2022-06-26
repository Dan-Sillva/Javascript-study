const test = {
    age: 22,
    name: 'Dan Silva',
    skill: 'JS, Jest, HTML, CSS'
}

export function printObj(obj) {
    var string = ''

    for (let props in obj){
        if (typeof obj[props] === 'string'){
            string += props + ':[' + obj[props] + ']; '
        }
    }

    return string
}
