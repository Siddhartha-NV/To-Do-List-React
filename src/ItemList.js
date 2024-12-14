import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ItemList = ({items , handleChange , handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleChange(item.id)}
              checked={item.checked}
            />
            <label
              style={(item.checked) ? { textDecoration: 'line-through' } : null }
              onDoubleClick={() => handleChange(item.id)}
            >{item.item}</label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              type='button'
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
  )
}

export default ItemList