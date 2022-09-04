import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Adefowope',
    age: 26,
    message: 'random message',
  });

  const changeMessage = () => {
    // You can use spread operator in object useState case to override a specific value
    setPerson({ ...person, message: 'Ademide is my lover' });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change message
      </button>
    </>
  );
};

export default UseStateObject;
