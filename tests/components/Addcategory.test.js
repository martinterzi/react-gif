import { render, screen, fireEvent } from '@testing-library/react'
import { Addcategory } from '../../src/components'

describe('Pruebas en Addcategory />', () => {

    test('debe cambiar el valor de la caja de texto', () => {

        render( <Addcategory onAddCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, {target:{ value: 'Saitama' }} )   
        
        expect( input.value ).toBe('Saitama')
       
    });

    test('debe llamar a la funcion si el input tiene un valor', () => {
        const inputValue = 'Saitama'
        render( <Addcategory onAddCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, {target:{ value: 'Saitama' }} )   
        fireEvent.submit( form )
        expect( input.value ).toBe('');
        
       
    })



})