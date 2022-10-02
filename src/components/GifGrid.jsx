import Proptypes from 'prop-types'
import { GifItem } from './'

import { useFetchGiffs } from '../hooks/useFetchGiffs'



export const GifGrid = ({ category }) => {


  const { images, isLoading } = useFetchGiffs(category);
    
    

  return (
    <>
    <h3>{category}</h3>
    {
      isLoading && ( <h2>Esta cargando....</h2> )
    }
    <div className='card-grid'>
        {images.map((image) => (
            <GifItem key={image.id}
                     {...image}
            />
            
        ))}
    </div>
    </>
  )
}


GifGrid.propTypes = {
  category: Proptypes.string.isRequired,
  
}
