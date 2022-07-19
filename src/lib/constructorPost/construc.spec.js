import { Post, viewCount, addComment, updateStatus, status } from "./construc";

describe('Teste de criação de um post', () => {
    it('espera-se que um post seja criado ', () => {
        const result = {
            title: 'TESTEE',
            message: 'Lorem',
            author: 'Robson D. Connor',
            views: 0,
            comments: [],
            status: 'ag_publicação'
        }
        
        expect(new Post('TESTEE', 'Lorem', 'Robson D. Connor'))
        .toEqual(result)
    });
})

describe('Teste para aumentar a quantidade de visualizações', () => {
    it('espera-se que a quantidade de views do post seja aumentada em 1', () => {
        const post = {
            title: 'TESTEE',
            message: 'Lorem',
            author: 'Robson D. Connor',
            views: 0,
            comments: [],
            status: 'ag_publicação'
        }

        viewCount(post)

        expect(post.views)
        .toBe(1)
    });
})

describe('Teste para adicionar um comentário a um post existente', () => {
    it('espera-se que um comentário seja adicionado ao post', () => {
        const post = {
            title: 'TESTEE',
            message: 'Lorem',
            author: 'Robson D. Connor',
            views: 0,
            comments: [],
            status: 'ag_publicação'
        }
        
        const comment = {
            author: 'Tiago',
            message: 'Gostei'
        }

        addComment(post, comment)

        expect(post.comments[0]).toEqual(comment)

    });
})

describe('Teste para atualizar o status', () => {
    const post = {
        title: 'TESTEE',
        message: 'Lorem',
        author: 'Robson D. Connor',
        views: 0,
        comments: [],
        status: 'ag_publicação'
    }

    it('espera-se que o staus do post seja atualizado de ag_publicação para publicado', () => {
        updateStatus(post)
        expect(post.status).toBe(status.PUBLICADO)

    });

    it('espera-se que o staus do post seja atualizado de publicado  para cancelado', () => {
        updateStatus(post)
        expect(post.status).toBe(status.CANCELADO)

    });
})