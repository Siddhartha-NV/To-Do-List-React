import React, { useState } from 'react'
import ItemList from './ItemList'


const Content = ({items , handleChange , handleDelete}) => {
  return (
    <main>
      {items.length ? (
          <ItemList 
          items = {items}
          handleChange = {handleChange}
          handleDelete = {handleDelete}
          />
      ):(
        <p>Your List is Empty</p>
      ) }
    </main>
  )
}

export default Content