const { sumMultiples } = require('./sumex')

describe('Teste de soma para todos os os divisiveis de 3 ou 5 dentro de um range', () => {
    it('espera-se a soma dos valores divisiveis por 3 ou 5', () => {
        expect(sumMultiples(10)).toBe(33) // 3 5 6 9 10
        
    });
})