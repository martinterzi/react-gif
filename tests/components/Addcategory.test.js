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
        const inputValue = 'Saitama';
        const onAddCategory = jest.fn();
        render( <Addcategory onAddCategory={ onAddCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input, {target:{ value: inputValue }} )   
        fireEvent.submit( form )

        expect( input.value ).toBe('');

        expect( onAddCategory ).toHaveBeenCalled();
        expect( onAddCategory ).toHaveBeenCalledTimes(1);
        expect( onAddCategory ).toHaveBeenCalledWith( inputValue );

       
    });

    test('no debe llamar a la funcion si el input no tiene un valor', () => {
       
        const onAddCategory = jest.fn();
        render( <Addcategory onAddCategory={ onAddCategory } /> );
       
        const form = screen.getByRole('form');
        
          
        fireEvent.submit( form )

        

        
        expect( onAddCategory ).toHaveBeenCalledTimes(0);
        expect( onAddCategory ).not.toHaveBeenCalled();
    })



})