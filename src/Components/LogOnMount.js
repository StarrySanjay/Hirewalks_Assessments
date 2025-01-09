import React, { useEffect } from 'react';

const LogOnMount = () => {

  useEffect(() => {
    console.log('Component mounted');
  }, []); 

  return (
    <div>
      <h2>Component Mounted </h2>
      <p>See on the Console</p>
    </div>
  );
};

export default LogOnMount;
