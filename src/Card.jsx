import React from 'react';

const Card = ({ cardName, price, description, Bold, liteColor }) => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <p className="cardName">{cardName}</p>
        <p className="price">{price}<span>/month</span></p>
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
                <i className="fa-solid fa-check"></i>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='bold'>
        {Bold && (
          <p>
            <i className="fa-solid fa-check"></i> <b>{Bold}</b>
          </p>
        )}
      </div>
      <div className='button'>
        <button>Click Me</button>
      </div>
    </div>
  );
}

export default Card;
