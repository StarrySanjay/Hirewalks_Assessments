// App.js
import React from 'react';
import Layout from './Components/Layout.js';
import TextInput from './Components/TextInput.js';
import LogOnMount from './Components/LogOnMount.js';
import StyledButton from './Components/StyledButton.js';
import ToggleComponent from './Components/ToggleComponent.js';
import ParentComponent from './Components/ParentComponent.js';
import Greeting from './Components/Greeting.js';

const App = () => {
  return (
    <Layout>
      <h2>Q2:</h2>
     <TextInput/>
     <h2>Q3:</h2>
     <LogOnMount/>
     <h2>Q4:</h2>
     <StyledButton/>
     <h2>Q5:</h2>
     <ToggleComponent/>
     <h2>Q6:</h2>
     <ParentComponent/>
     <h2>Q7:</h2>
     <Greeting/>
     <h2>Q8:</h2>
    </Layout>
  );
};

export default App;
