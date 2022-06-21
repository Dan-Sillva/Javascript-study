module.exports.fizzBuzz = fizzBuzz

function fizzBuzz(req){
    var res = ''

    if (typeof(req) === 'number'){

        req % 3 === 0 ? (res += 'Fizz') : {}
        req % 5 === 0 ? (res += 'Buzz') : {}
        req === 0 ? res = 0 : {}

    } else {
        res = 'não é um numero'
    }
    
    return res === '' ? (req) : (res)
}


// console.log('tudo ok')