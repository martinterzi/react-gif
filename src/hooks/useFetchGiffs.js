import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react'


export const useFetchGiffs = (category) => {

    const [images, setimages] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    

    const getImages = async () => {
        const newImg = await getGifs(category);
        setimages(newImg);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])



    return {
        images,
        isLoading
    }
}
