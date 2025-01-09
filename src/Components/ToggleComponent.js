import React, { useState } from 'react';

const ToggleComponent = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleState = () => {
    setIsActive((prevState) => !prevState);
  };

 
  const boxStyle = {
    padding: '20px',
    textAlign: 'center',
    fontSize: '18px',
    marginBottom: '20px',
    backgroundColor: isActive ? '#4CAF50' : '#FF004F',  
    color: 'white',
    transition: 'background-color 0.3s ease', 
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#FF004F',  
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    backgroundColor: '#E60044',  
  };

  return (
    <div>
      <h2>Conditional Styles</h2>
      <div style={boxStyle}>
        The current state is: {isActive ? 'Active' : 'Inactive'}
      </div>
      <button
        style={buttonStyle}
        onClick={toggleState}
        onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
      >
        Toggle State
      </button>
    </div>
  );
};

export default ToggleComponent;
