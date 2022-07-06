export function primeFinder(range){
    if (typeof range !== 'number') { throw new Error('Please check your input!') }
    var array = []

    for (let index = 2; index <= range; index++) {
        let prime = false
        for (let index2 = 2; index2 <= index; index2++) {
            if (index % index2 === 0 && (index2 !== 1 && index2 !== index)){
                prime = false
                break
            } else {
                prime = true
            }
        }

        if (prime) array.push(index)
    }

    return array
}

console.table(primeFinder(15))
