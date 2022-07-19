import {compareObj} from './compareObj'

describe('Teste de função para comparação de objetos', () => {
    it('espera-se que a comparação retorne verdadeiro para objetos iguais', () => {
        const obj = {
            nome: 'Dan',
            idade: 19
        }

        expect(compareObj(obj, obj)).toBe(true)
    });

    it('espera-se que a comparação retorne falso para objetos diferentes', () => {
        const obj = {
            nome: 'Dan',
            idade: 19
        }

        expect(compareObj(obj, {})).toBe(false)
    });
})