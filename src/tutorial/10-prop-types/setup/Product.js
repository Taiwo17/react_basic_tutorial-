import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ name, image, price }) => {
  // Second approach using or || and &&
  const url = image && image.url;
  return (
    <article className='product'>
      <img src={url || defaultImage} alt={name} />
      <h4> {name} </h4>
      <p> ${price} </p>
    </article>
  );
};

// If the API states undefined, you can either set up
// default props or use short circuit operators

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// First Method using defaultProps
Product.defaultProps = {
  name: 'Ademide',
  price: 3.99,
  image: {
    url: defaultImage,
  },
};

export default Product;
