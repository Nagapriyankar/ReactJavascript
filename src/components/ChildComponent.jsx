import React, { createContext, useContext, useState } from 'react';
import GrandChildComponent from './GrandChildComponent';
import { AMessageContext } from '../App';

// create a childMessageContext
const CMessageContext = createContext();

function ChildComponent() {

    const [message, setMessage] = useContext(AMessageContext);
    const [childmessage, setChildMessage] = useState('Hello from Child');

    const updateMessage = () => {
        setMessage('Hello from Parent');
    }

    return (
        <div>
            <h2>Child Component</h2>
            <p>Message from Parent Component: <b>{message}</b></p>
            <button onClick={updateMessage}>Update Message</button>
            {/* provide the childMessageContext to GrandChildComponent */}
            <CMessageContext.Provider value={[childmessage, setChildMessage]}>
                <GrandChildComponent />
            </CMessageContext.Provider>

            
        </div>
    )
}

export {ChildComponent as default, CMessageContext}
