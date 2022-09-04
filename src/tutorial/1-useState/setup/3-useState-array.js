import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  // Remove item will look for the unique key which it's the id
  const removeItem = id => {
    // create  the person id that's meant to be removed anytime the button is clicked
    // let newPeople = people.filter(person => person.id !== id);
    // setPeople(newPeople); // using the first approach

    // Using the functional approach - second method
    setPeople(oldPeople => {
      let newPeople = oldPeople.filter(person => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map(person => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Clear item
      </button>
    </>
  );
};

export default UseStateArray;
