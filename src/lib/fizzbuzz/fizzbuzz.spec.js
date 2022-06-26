import {fizzBuzz} from './fizzbuzz'

describe('Testes com valores não numéricos', () => {
    it('recebendo um booleano', () => {
        expect(fizzBuzz(true)).toBe('não é um numero')

    });

    it('recebendo uma string', () => {
        expect(fizzBuzz('teste')).toBe('não é um numero')

    });
})

describe('Teste com valores numericos', () => {
    it('teste com valor 0', () => {
        expect(fizzBuzz(0)).toBe(0)
    });

    it('teste com valor não divisivel por 3 ou 5', () => {
        const value = 7
        
        expect(fizzBuzz(value)).toBe(value)
    });

    it('teste com valor divisivel por 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
    });

    it('teste com valor divisivel por 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
    });

    it('teste com valor divisivel por 3 e 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
    });
})