export function valueSpec(){
    var string = ''

    if (arguments.length === 2) {
        for(var i = arguments[0]; i <= arguments[1]; i++){
            i % 2 === 0 ? string += '[' + i + ' É PAR]' : string += '[' + i + ' É IMPAR]'
        }

    } else if (arguments.length === 1) {
        for(var i = 1; i <= arguments[0]; i++){
            i % 2 === 0 ? string += '[' + i + ' É PAR]' : string += '[' + i + ' É IMPAR]'
        }
    } else {
        return 'numero de argumentos invalido'
    }
    
    return string
}