import React, { useContext, useState } from 'react'
import { NameContext } from '../App';
import { Profiler } from 'react';

function Profile() {
    const { profileName, setProfileName } = useContext(NameContext);
    const [newName, setNewName] = useState('');

    let handleNamechange = ((e) => { setProfileName(e.target.value) })
    return (
        <div>

            <h2>Profile Name: { profileName}</h2>
                <input 
                    value={profileName}
                    placeholder='Enter name...'
                    onChange={handleNamechange} />
          


        </div>
    )
}

export default Profile