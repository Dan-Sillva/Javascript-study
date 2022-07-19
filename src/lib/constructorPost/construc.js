/*
    titulo 
    mensagem
    autor
    visualizacoes
    comentarios
    status
*/

export const status = {
    PUBLICADO: 'publicado',
    AG_PUBLUCACAO: 'ag_publicação',
    CANCELADO: 'cancelado'
}


export function Post(title, message, author){
    this.title = title,
    this.message = message,
    this.author = author,
    this.views = 0,
    this.comments = [],
    this.status = status.AG_PUBLUCACAO
}

// manipular post | manipule post

export function viewCount(post) {
    post.views ++;
}

export function addComment(post, comments) {
    post.comments.push(comments)
}

export function updateStatus(post){
    switch (post.status) {
        case status.AG_PUBLUCACAO:
            post.status = status.PUBLICADO
            break

        case status.PUBLICADO:
            post.status = status.CANCELADO
            break
    }
}

// teste


// let message = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`

// let post = new Post('TESTEE', message, 'Robson D. Connor')
// console.log(post, '\n\n')

// viewCount(post)
// console.log(post, '\n\n')

// updateStatus(post)
// addComment(post, {
//     author: 'Con D. Oriano',
//     message: 'Muito bom o conteudo do lorem'
// })
// console.log(post, '\n\n')

// updateStatus(post)
// console.log(post, '\n\n')