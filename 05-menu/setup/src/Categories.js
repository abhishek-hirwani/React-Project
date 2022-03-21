import React from 'react';

//passing props
const Categories = ({categories, filterItems }) => {
  
  return (
    <div className='btn-container'>

      {/* mapping the category */}
      {categories.map((category, index)=>{
        return (
          <button 
          type='button'
          className='filter-btn'
          key={index}
          onClick={()=> filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
