/*
 *	Funcões de Construção(Constructor Function)
 *
 *	Em JS, pode ser considerada uma forma de criar um objeto utilizando o new.
 *	Vou refatorar o código do ultimo commit para substituir a factory function por uma
 *	constructor function.
 *
 */

const result = []

const personList = [
	['Romario',12, 0],
	['Alexander', 32, 1],
	['Jonathan Joestar', 17, 0]
]

const skillsList = [
	['JS', 'HTML', 'CSS', 'VUE'],
	['RUBY', 'MYSQL', 'PYTHON', 'JAVA']
]

function Person (name, age, skills){
	
	this.name = name,
	this.age = age,
	this.city = 'Unai',
	this.state = 'MG',
	this.skills = skills	

	this.status = () => {console.log('create person...')}  
}

for(let i = 0; i < personList.length; i++){
	const person = new Person(personList[i][0], personList[i][1], skillsList[personList[i][2]])
	result.push(person)
}

console.table(result)

