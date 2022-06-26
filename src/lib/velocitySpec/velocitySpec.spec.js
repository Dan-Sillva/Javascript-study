import { specVel } from './velocitySpec'

describe('Teste com valor não numerico', () => {
    it('espera-se não numerico para string ', () => {
        expect(specVel('')).toBe('não condiz com um numero')
    });

    it('espera-se não numerico para boolean', () => {
        expect(specVel(true)).toBe('não condiz com um numero')
    });
})

describe('Teste para velocidade permitida', () => {
    it('espera-se o resultado de valor permitido para valor menor que 70', () => {
        const result = {
            situacao: 'velocidade permitida'
        }
        
        expect(specVel(50)).toEqual(result)
    });

    it('espera-se o resultado de valor permitido para valor igual a 70', () => {
        const result = {
            situacao: 'velocidade permitida'
        }

        expect(specVel(70)).toEqual(result)
    });
})

describe('Teste para velocidade acima da permitida, porem sem suspensão da carteira', () => {
    it('espera-se que a velocidade esteja acima do permitido e que receba 1 ponto para cada 5km acima da velocidade', () => {
        const result = {
            situacao: 'acima da velocidade permitida',
            pontos: 3
        }

        expect(specVel(80)).toEqual(result)
    });

})

describe('Teste para velocidade acima da permitida com suspencao de carteira', () => {
    it('espera-se velocidade acima da permitida com suspensao da carteira', () => {
        const result = {
            situacao: 'acima da velocidade permitida',
            pontos: 13,
            alerta: '!! carteira suspensa !!'
        }

        expect(specVel(130)).toEqual(result)
    });
})