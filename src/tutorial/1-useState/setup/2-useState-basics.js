import React, { useState } from 'react';
import '../../../../src/main.css';

// use
// component name must be uppercase
// must be in the function/component body
// cannot call condtionally

// The useState has two items, the first one it the value
// the second one is the function that re-render the value in the ui
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // const value = useState(1)[0]; // The first index in the useState array and it start from zero
  // const handleValue = useState(1)[1] // the second index in the useState arry and it's one
  const [text, setText] = useState('Hello Adefowope');

  const handleChange = () => {
    if (text === 'Hello Adefowope') {
      setText('Hello Ademide');
    } else {
      setText('Hello Adefowope');
    }
  };

  return (
    <>
      <h2>{text}</h2>;
      <button type='button' className='btn' onClick={handleChange}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
