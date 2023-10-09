import React, { useContext } from 'react';
import { AMessageContext } from '../App';
import { CMessageContext } from './ChildComponent';


function GrandChildComponent() {
    const message = useContext(AMessageContext);
    const [childmessage, setChildMessage] = useContext(CMessageContext);
    // use the context childMessageContext, get the data
    return (
        <div>
            <h2>GrandChild Component</h2>
            {/* print the data received from the childMessageContext */}
            <p>Message from Parent Component: <b>{childmessage}</b></p>
        </div>
    )
}

export default GrandChildComponent;