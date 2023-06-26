import React from 'react';

const Card = ({ cardName, price, description,  liteColor }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <p className="cardName">{cardName}</p>
        <p className="price">{price}<span><b>/month</b></span></p>
      </div>
      <div className='des'>
        {description && (
          <ul>
            {description.map((item, index) => (
              <li key={index}>
                <i className="fa-solid fa-check"></i>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='lite'>
        {liteColor && (
          <ul>
            {liteColor.map((item, index) => (
              <li key={index}>
                <i className="fa fa-times"></i>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className='button'>
      <button type="button" className="btn btn-primary">Button</button>      
      </div>
    </div>
  );
}

export default Card;
