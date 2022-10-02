import { getGifs } from "../../src/helpers/getGifs"

getGifs

describe('Pruebas en getGifs', () => {

    test('retornar arreglo de gifs', async () => {

        const gifs = await getGifs('jordan')

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )        
        })

    })




})