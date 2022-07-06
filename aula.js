/*
 *	Manipulação de Objeto em JS(assign and spread)
 *
 *	Aqui vou demonstrar um pouco da utilização de assign e spread para duplicação de
 *	um objeto, além de demonstrar a propriedade de maleabilidade do objeto.
 *
 */

const objeto = {
	name: 'Danilo',
	age: 20 
}

// objetos são maleaveis, isso significar que mesmo declarados como constantes, podem ter
// propriedades alteradas

console.log('Objeto inicialmente: ')
console.table(objeto)

// agora, irei adicionar uma nova propriedade, remover uma existente e editar outra

objeto.skill = 'QA'
delete objeto.age
objeto.name = 'Danilo Araujo'

console.log('Objeto após alteração: ')
console.table(objeto)

// agora, irei copiar o objeto utilizando assingn, adicionando uma propriedade, e também utilizando
// spread

const objeto2 = Object.assign({
	newAge: 22
}, objeto)

const objeto3 = {...objeto}

console.log('Objeto2 (assing) ')
console.table(objeto2)

console.log('Objeto3 (spread) ')
console.table(objeto3)






