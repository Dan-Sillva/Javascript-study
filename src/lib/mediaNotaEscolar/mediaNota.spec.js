const { mediaNota } = require('./mediaNota')

describe('Testando media da nota e verificando status de retorno', () => {
    it('espera-se status F para notas abaixo de 60', () => {
        const result = {
            media: 50,
            status: 'F'
        }
        
        expect(mediaNota(60, 40)).toEqual(result)
    });

    it('espera-se status D para notas entre 60 e 69', () => {
        const result = {
            media: 60,
            status: 'D'
        }

        expect(mediaNota(40, 80)).toEqual(result)
    });

    it('espera-se status C para notas entre 70 e 79', () => {
        const result = {
            media: 70,
            status: 'C'
        }

        expect(mediaNota(100, 40)).toEqual(result)
    });

    it('espera-se status B para notas entre 80 e 89', () => {
        const result = {
            media: 80,
            status: 'B'
        }

        expect(mediaNota(100, 60)).toEqual(result)
    });

    it('espera-se status A para notas entre 90 e 100', () => {
        const result = {
            media: 90,
            status: 'A'
        }

        expect(mediaNota(100, 80)).toEqual(result)
    });
})