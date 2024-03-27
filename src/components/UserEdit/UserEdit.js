import { useEffect, useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from "./UserEdit.module.scss"


import React from 'react'

function UserEdit({ user, setUser, showUserForm, setShowUserForm }) {
    const [userData, setUserData] = useState(user || {
        name: '',
        email: ''
    })
    const [error, setError] = useState('');

    const id = user._id || ''

    function handleChange(evt) {
        setUserData({ ...userData, [evt.target.name]: evt.target.value });
        setError('')
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            const user = await usersService.update(userData, id);
            console.log(user)
            setUser(user);
        } catch {
            setError('Update Failed - Try Again');
        }
    }
  return (
    <>
        <form  autoComplete="off" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={userData.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} required />
            <button type="submit">SAVE CHANGES</button>
        </form>
        <p className="error-message">&nbsp;{error}</p>
    </>
  )
}

export default UserEdit

            {/* <label>experience</label>
                {user?.experience?.map((item) => {
                    return(<div key={item._id}>
                        <input type='text' name='experience' value={userData.experience.title} onChange={handleChange}/>
                        <input type='text' name='experience' value={userData.experience.company} onChange={handleChange}/>
                        
                    </div>)
                })} */}
            {/* <div>
                <label>experience</label>
                {user?.experience?.map((item) => {
                    return(<div key={item._id}>
                        <h1>{item.title}</h1>
                        <h2>{item.company}</h2>
                    </div>)
                })}
            </div> */}
        {/* <div className='form'>
            <label>Name</label>
            <input type="text" name="name" defaultValue={user.name} value={userData.name} onChange={handleChange} required />
            <label>Email</label>
            <input type="text" name="email" defaultValue={user.email} value={userData.email} onChange={handleChange} placeholder="Email" required />
            <button type="submit">SAVE CHANGES</button>
            <div>
                <label>experience</label>
                {user?.experience?.map((item) => {
                    return(<div key={item._id}>
                        <h1>{item.title}</h1>
                        <h2>{item.company}</h2>
                    </div>)
                })}
                <input/>
                <input/>
            </div>
        </div> */}


