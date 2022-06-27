export function cont(number){
    if (number === 0) return []
    var string = '*'; var array = []

    for(let i = 0; i < number; i++){
        array.push(string)
        string += '*'
    }

    return array
}
