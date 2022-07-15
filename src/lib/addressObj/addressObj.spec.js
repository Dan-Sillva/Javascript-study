import {addressFactory} from './addressObj'
import {personFactory} from './personFactory'

describe('Teste para criaçao de objetos address para objetos person', () => {
    it('espera-se que a função retorne um objeto person com endereço formado', () => {   
        const result = {
            name: 'Rodrigo', 
            age: 18,
            address: { 
                CEP: 78787878,
                city: 'London',
                street: 'St. James Webb'
            }
        }        

        expect(personFactory('Rodrigo', 18, addressFactory(78787878, 'London', 'St. James Webb')))
        .toEqual(result)
    });

    it('espera-se que a função retorne um objeto person sem endereço formado', () => {
        const result = {
            name: 'Rodrigo',
            age: 18,
            address: undefined
        }

        expect(personFactory('Rodrigo', 18))
        .toEqual(result)
    });
})

describe('Teste para criação de objeto address', () => {
    it('espera-se que a função retorne um endereço formatado', () => {
        const result = {
            CEP: 787878, 
            city: 'London',
            street: 'St. James Webb'
        }

        expect(addressFactory(787878, 'London', 'St. James Webb'))
        .toEqual(result)
    });
})