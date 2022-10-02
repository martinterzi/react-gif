import React, { useState } from 'react'
import Proptypes from 'prop-types'
export const Addcategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onChangeInput = ({ target: { value } }) => {
        setInputValue(value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onAddCategory(inputValue.trim())
       setInputValue('')
    }

    return (
        <form aria-label='form'
           onSubmit={(e)=> handleSubmitForm(e)}>
            <input
                type='text'
                placeholder='Buscar gifs...'
                name='search'
                value={inputValue}
                onChange={(e) => onChangeInput(e)}
            />
        </form>

    )
}


Addcategory.propTypes = {
    onAddCategory: Proptypes.func.isRequired
}