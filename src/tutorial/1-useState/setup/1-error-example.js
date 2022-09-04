import React from 'react';
import '../../../../src/main.css';

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button className='btn' type='submit' onClick={handleClick}>
        Change title
      </button>
    </>
  );
};

export default ErrorExample;
