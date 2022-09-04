import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

// Initial Render - Loading the page
// useEffect render the function

/* Once we  re-render/re-load the component
    before the useEffect re-render
    the cleanup useEffect function will re-render */

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);

    return () => {
      window.removeEventListener('resize', checkSize);
    };
  });

  return (
    <>
      <h1>Window Dynmanic Size</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
