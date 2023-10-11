import React from 'react'
import LisItem from './LisItem'

const ListItemContainer = ({productos}) => {

  return (
    <div>
        {productos.map( producto => <LisItem key={producto.id} producto={producto}  />) }
    </div>
  )
}

export default ListItemContainer