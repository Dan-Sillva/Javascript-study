import { personFactory } from "./personFactory.js"
// const person = personFactory('Ruy Gomez', 18)

export function addressFactory(CEP, city, street) {
    return {
        CEP,
        city,
        street
    }
}

// person.address = addressFactory(78787878, 'London', 'St. James Webb')

