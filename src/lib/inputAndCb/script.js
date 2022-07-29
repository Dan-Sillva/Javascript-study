const button = document.getElementById('btn')

button.addEventListener('click', input(cb))

function cb(message){
    alert('Sua resposta foi: ' + message)
}

function input(cb){
    cb(prompt('Digite o que seu coração mandar: '))
}