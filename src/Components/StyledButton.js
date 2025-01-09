import React from 'react';

const StyledButton = () => {
 
  const buttonStyles = {
    backgroundColor: '#FF004F', 
    color: 'white',            
    padding: '10px 20px',       
    fontSize: '16px',          
    border: 'none',            
    borderRadius: '4px',       
    cursor: 'pointer',        
    transition: 'background-color 0.3s', 
  };

  
  const buttonHoverStyles = {
    backgroundColor: '#E60044',
  };

  return (
    <button
      style={buttonStyles} 
      onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyles.backgroundColor} 
      onMouseOut={(e) => e.target.style.backgroundColor = buttonStyles.backgroundColor} 
    >
      Click Me
    </button>
  );
};

export default StyledButton;
