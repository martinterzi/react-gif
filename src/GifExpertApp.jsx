import { useState, useEffect } from "react"
import { GifGrid, Addcategory } from "./components"



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (valor) => {
        if (categories.includes(valor)) return;

        setCategories([valor, ...categories ])
    }

    useEffect(() => {


    }, [categories])


    return (
        <>
            <h1>GIFF</h1>

            <Addcategory onAddCategory={(valor) => onAddCategory(valor)} />



            {
                categories.map((cat) => (
                    <GifGrid key={cat} category={cat} />
                ))
            }

        </>
    )
}
