/*
 *	Funcões de Fabrica(Factory Function)
 *
 *	Em JS, pode ser considerada como uma fabrica de objetos json.
 *	
 *	Nesse caso, irei criar uma fabrica que cria objetos de pessoas com nome, idade e habilidades diferentes,
 *	mas que estão na mesma cidade e estado.
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

function personFactory(name, age, skills){
	return {
		name,
		age,
		city: 'Unai',
		state: 'MG',
		skills,

		status: () => {console.log('create person...')} 
	} 
}

for(let i = 0; i < personList.length; i++){
	result.push(personFactory(personList[i][0], personList[i][1], skillsList[personList[i][2]]))
}

console.table(result)

