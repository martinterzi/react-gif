import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'

describe('Pruebas en <GifItem />', () => {

    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg'

    test('should', () => {
       
        
       const { container } = render( <GifItem title={title} url={url} /> );
       expect( container ).toMatchSnapshot();

    });

    test('mostrar img con URL y SRC indicado', () => {
        render( <GifItem title={title} url={url} /> );

        const { alt, src } = screen.getByRole('img')
        expect( src ).toBe( url )
        expect( alt ).toBe( alt )

    });

    test('debe mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> );

        const { alt, src } = screen.getByRole('img')
        expect( screen.getByText( title ) ).toBeTruthy();

    })

})