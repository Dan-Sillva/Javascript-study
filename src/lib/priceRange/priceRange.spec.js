import { priceRange, upList, filter } from './priceRange.js'

describe('Teste para função de criação de tabela (produtos)', () => {
    it('espera-se que a função retorne uma lista com 15 itens', () => {
        expect(upList().length).toBe(15)
    });

    it('espera-se que cada objeto da lista tenha nome e preço', () => {
        const list = upList(), index = 0
        const result = [0, 0]

        for (let block in list) {
            list[block].hasOwnProperty('name') ? result[0]++ : () => {}
            list[block].hasOwnProperty('price') ? result[1]++ : () => {}
        }

        expect(result).toEqual([15, 15])
    });
})

describe('Teste para função de filtro da lista de produtos', () => {
    const rangeSpec = priceRange[1]
    
    it('espera-se receber uma lista com os valores entre um range', () => {
        let list = filter(upList(), rangeSpec)
        let result = false

        for (let block in list) {
            if (list[block].price > rangeSpec.min && list[block].price < rangeSpec.max){
                result = true
            } else {
                result = false
                break
            }
        }

        expect(result).toBe(true)

    });  
})