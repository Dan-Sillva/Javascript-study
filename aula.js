function repeat(number) {
    var string = ''
    
    if(number === 1){
        // console.log('chunk')
        string +='chunk'
    } else if (number > 1 ){
        // console.log('chunk-')
        string += 'chunk-' + repeat(number - 1)  
    } else {
        return null
    }

    return string
}