module.exports.specVel = specVel

function specVel(req) {
    var res = {}

    if (typeof(req) === 'number'){
        req <= 70 ? res.situacao = 'velocidade permitida' : res.situacao = 'acima da velocidade permitida'
        let pontos = Math.floor((req - 70) / 5) + 1

        res.situacao === 'acima da velocidade permitida' ? res.pontos = pontos : {}

        pontos > 12 ? res.alerta = '!! carteira suspensa !!' : {}
    
        return res
    } else {
        return 'não condiz com um numero'
    }
}