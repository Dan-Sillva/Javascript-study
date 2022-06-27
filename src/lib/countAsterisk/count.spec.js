import { cont } from './count'

describe('Teste de contatem de asteriscos', () => {
    it('espera-se que nenhum asterisco seja exibido', () => {
        const result = []
        expect(cont(0)).toEqual(result)

    });

    it('espera-se a contagem de 3 asteriscos', () => {
        const result = ['*','**','***']
        expect(cont(3)).toEqual(result)

    });
})