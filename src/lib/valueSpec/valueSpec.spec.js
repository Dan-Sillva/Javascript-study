import { valueSpec } from './valueSpec'

describe('Teste de definição de valor par ou impar dentro de um range', () => {
    it('somente com um argumento', () => {
        expect(valueSpec(3)).toBe('[1 É IMPAR][2 É PAR][3 É IMPAR]')
    });

    it('com dois argumentos | inicio e fim', () => {
        expect(valueSpec(4, 8)).toBe('[4 É PAR][5 É IMPAR][6 É PAR][7 É IMPAR][8 É PAR]')
    });

    it('com mais de dois argumentos', () => {
        expect(valueSpec(1, 2, 3)).toBe('numero de argumentos invalido')
    });

} )