import React from 'react'

const CategoriesItem = ({title,subtitle}) => {
  return (
    <div className='categories_item'>
        <div className="categories_item_image">
            
        </div>
        <div className="categories_item_info">
            <h4 className="categories_item_title">{title}</h4>
            <p className='categories_item_subtitle'>{subtitle}</p>
        </div>
    </div>
  )
}

export default CategoriesItem