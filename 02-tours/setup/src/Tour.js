import React, { useState } from 'react';

//Tour component
const Tour = ({id, image, info, name, price, removeTour}) => {
  //Readmore state created
  const [readMore, setReadMore] = useState(false)
  return(
    <article className='single-tour'> 
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {/* if readmore is true show the all info, else show content only 200 words */}
            {readMore ? info : `${info.substring(0,200)}...`}
            <button onClick={()=> setReadMore(!readMore)}>
              {readMore ? 'show less': ' read more' }
            </button>
          </p>
          <button className='delete-btn' onClick={()=> removeTour(id)}>
            not interested
          </button>
        </footer>

    </article>
  );
};

export default Tour;
