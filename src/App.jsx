  import React, { createContext, useState } from 'react';
import Profile from './components/Profile';
  // create a context
  const NameContext = createContext();

  function App() {

    const [profileName, setProfileName] = useState('');

    return (
      <div>
        <h1>APP COMPONENT</h1>
        <NameContext.Provider value={{ profileName, setProfileName }}>
          <Profile />
        </NameContext.Provider>
      </div>
    )
  }

export { App as default, NameContext };