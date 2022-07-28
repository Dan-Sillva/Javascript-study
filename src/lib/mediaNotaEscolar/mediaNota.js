/* 
0  - 59  : F
60 - 69  : D
70 - 79  : C
80 - 89  : B
90 - 100 : A
*/

export function mediaNota () {
    var media = 0
    var obj = {
        media: 0,
        status: ''
    }

    for (let value = 0; value < arguments.length; value++ ){
        media += arguments[value]
    }

    obj.media = (media / arguments.length)
   

    switch(true) {
        case obj.media < 60:
            obj.status = 'F'
            break;
            
        case obj.media < 70 :
            obj.status = 'D'
            break;
            
        case obj.media < 80:
            obj.status = 'C'
            break;

        case obj.media < 90:
            obj.status = 'B'
            break;

        case obj.media <= 100:
            obj.status = 'A'
            break;

    }

    // obj.media < 60 ? obj.status = 'F' : () => {}
    // (obj.media >= 60 && obj.media < 70 ) ? obj.status = 'D' : () => {}
    // (obj.media >= 70 && obj.media < 80 ) ? obj.status = 'C' : () => {}
    // (obj.media >= 80 && obj.media < 90 ) ? obj.status = 'B' : () => {}
    // (obj.media >= 90 && obj.media <= 100 ) ? obj.status = 'A' : () => {}

    return obj
}
