import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGiffs } from '../../src/hooks/useFetchGiffs'

jest.mock('../../src/hooks/useFetchGiffs')


describe('Pruebas en <GifGrid />' , () => {
 
    const category = 'batman'

    test('mostrar loading al inicio', () => {

        useFetchGiffs.mockReturnValue({
            images: [],
            isLoading: true
        })
         
        render( <GifGrid category={category} />);
        expect( screen.getByText('Esta cargando....') );
        expect( screen.getByText(category) );
        
    });


    test('debe de mostrar items cuando se cargan las imagenes desde', () => {

        const gifs = [
            {
                id: '123',
                title: 'Betun',
                url: 'https://localhost/betun.jpg'
            },
            {
                id: '124',
                title: 'Pelota',
                url: 'https://localhost/pelota.jpg'
            }
        ]

        useFetchGiffs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render( <GifGrid category={category} />);
        expect( screen.getAllByRole('img').length ).toBe(2)

    })


})