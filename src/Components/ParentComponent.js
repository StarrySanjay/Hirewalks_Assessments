import React from 'react';


const ParentComponent = () => {
  const handleButtonClick = () => {
    alert('Button clicked in the child component!');
  };

  return (
    <div>
      {/* Passing the handleButtonClick function as a prop to the child component */}
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
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


const ChildComponent = ({ onButtonClick }) => {
  return (
    <div>
      <h3>Prop with Function</h3>
      <button style={buttonStyle} onClick={onButtonClick}>Click me</button> 
    </div>
  );
};

export default ParentComponent;
