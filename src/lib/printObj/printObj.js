const test = {
    age: 22,
    name: 'Dan Silva',
    skill: 'JS, Jest, HTML, CSS'
}

module.exports.PrintObj = printObj

function printObj(obj) {
    var string = ''

    for (props in obj){
        if (typeof obj[props] === 'string'){
            string += props + ':[' + obj[props] + ']; '
        }
    }

    return string
}
