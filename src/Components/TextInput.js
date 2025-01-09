import React, { useState } from 'react';

const TextInput = () => {
  
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Real-time Text Update</h2>
      
      {/* Text input field */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{
          padding: '8px',
          fontSize: '16px',
          marginBottom: '10px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      {/* Displaying the text as the user types */}
      <p>Typed text: <strong>{inputText}</strong></p>
    </div>
  );
};

export default TextInput;
