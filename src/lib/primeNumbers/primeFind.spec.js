import { primeFinder } from "./primeFind";

describe('Testando retorno de numeros primos em um range', () => {
    it('espera-se o retorno de um erro para entradas não numericas', () => {
        expect(() => {
            primeFinder(true)
        }).toThrowError()

        expect(() => {
            primeFinder('')
        }).toThrowError()
    
        expect(() => {
            primeFinder({})
        }).toThrowError()
    });

    it('espera-se o retorno de um vetor com os valores primos em um range', () => {
        const result = [2, 3, 5, 7, 11, 13]
        
        expect(primeFinder(15)).toEqual(result)
    });
})