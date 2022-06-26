export function sumMultiples(range) {
    var sum = 0 
    for (let n = 0; n <= range; n++) {
        (n % 3 === 0 || n % 5 === 0) ? sum += n : {}
    }

    return sum  
}