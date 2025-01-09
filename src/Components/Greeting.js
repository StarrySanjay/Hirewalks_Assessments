import React from 'react';


const Greeting = ({ greeting = 'Hello' }) => {
  return <h2>{greeting}</h2>;
};

export default Greeting;
