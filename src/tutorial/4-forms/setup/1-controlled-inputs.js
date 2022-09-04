import React, { useState } from 'react';

// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  // Adding the people to the firstName and Email
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      // making use of function to pass the new person
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log('Empty value');
    }
  };

  return (
    <>
      <article>
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              value={firstName}
              id='firstName'
              name='firstName'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              value={email}
              id='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type='submit' className='btn'>
            add person
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className='item'>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
