import React, { createContext, useState } from 'react';
import ChildComponent from './components/ChildComponent';

// create a context
const AMessageContext = createContext();

function App() {

  const [message, setMessage] = useState('Hello from App');

  return (
    <div>
      <h1>Parent Component</h1>
      <AMessageContext.Provider value={ [message, setMessage] }>
        <ChildComponent />
      </AMessageContext.Provider>
    </div>
  )
}

export { App as default, AMessageContext };