/* 
0  - 59  : F
60 - 69  : D
70 - 79  : C
80 - 89  : B
90 - 100 : A
*/

export function mediaNota () {
    var media = 0
    let obj = {}

    for (let value = 0; value < arguments.length; value++ ){
        media += arguments[value]
    }

    obj.media = (media / arguments.length)
   
    obj.media < 60 ? obj.status = 'F' : () => {}
    (obj.media >= 60 && obj.media < 70 ) ? obj.status = 'D' : () => {}
    (obj.media >= 70 && obj.media < 80 ) ? obj.status = 'C' : () => {}
    (obj.media >= 80 && obj.media < 90 ) ? obj.status = 'B' : () => {}
    (obj.media >= 90 && obj.media <= 100 ) ? obj.status = 'A' : () => {}

    return obj
}

mediaNota(12, 32, 41, 32)