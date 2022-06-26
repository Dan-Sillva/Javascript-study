import { printObj } from './printObj'

describe('Teste de print para atributos tipo string', () => {
    it('espera-se a impressão apenas de atributos do tipo string', () => {
        const obj = {
            name: 'Danilo Araujo Silva',
            age: 26,
            studant: true,
            skills: 'JS, Jest, HTML, CSS'
        }

        expect(printObj(obj))
        .toBe('name:[Danilo Araujo Silva]; skills:[JS, Jest, HTML, CSS]; ')
    });

    it('espera-se o print de uma string vazia', () => {
        const obj = {
            age: 26,
            studant: true
        }

        expect(printObj(obj))
        .toBe('')
    });
})