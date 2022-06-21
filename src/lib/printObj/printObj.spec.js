const { PrintObj } = require('./printObj')

describe('Teste de print para atributos tipo string', () => {
    it('espera-se a impressão apenas de atributos do tipo string', () => {
        const obj = {
            name: 'Danilo Araujo Silva',
            age: 26,
            studant: true,
            skills: 'JS, Jest, HTML, CSS'
        }

        expect(PrintObj(obj))
        .toBe('name:[Danilo Araujo Silva]; skills:[JS, Jest, HTML, CSS]; ')
    });

    it('espera-se o print de uma string vazia', () => {
        const obj = {
            age: 26,
            studant: true
        }

        expect(PrintObj(obj))
        .toBe('')
    });
})