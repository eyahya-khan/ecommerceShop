import React from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ src, alt, i }) => (
  <div className="col-6 col-md-4">
    <img
      className="w-100 card_image object-fit-cover object-pos-center"
      src={src || `https://picsum.photos/seed/${i + 1}/200/300`}
      alt={alt || 'Awesome Fill Murray pic'} />
  </div>
);

export default Card;
