import { useEffect, useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from "./UserEdit.module.scss"


import React from 'react'

function UserEdit({ user, setUser }) {
    const [userData, setUserData] = useState(user || {
        name: '',
        email: '',
        education: [],
        experience: [],
        skills: []
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
        <div className='form'>
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
        </div>
        
        <p className="error-message">&nbsp;{error}</p>
    </>
  )
}

export default UserEdit

// import {useParams} from "react-router-dom"

// export default function UserEdit({ setUser }) {
//     const params  = useParams()
//     const id = params.id
//     const [editUser, setEditUser] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     })
//     const getUser = async () => {
//         try{
//             const response = await fetch(`/api/users/${id}`);
//             const data = await response.json();
//             console.log(data)
//             setEditUser(data);
//         }catch(error){
//             console.error(error)
//         }   
//       };

//     useEffect(() => {
//           getUser()
//     }, [])

//     const [data, setData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirm: '',
//         error: ''
//     });

//     const [error, setError] = useState('');

//     function handleChange(evt) {
//         setData({ ...data, [evt.target.name]: evt.target.value });
//         setError('');
//     }

//     async function handleSubmit(evt) {
//         // Prevent form from being submitted to the server
//         evt.preventDefault();
//         try {
//             // The promise returned by the signUp service method
//             // will resolve to the user object included in the
//             // payload of the JSON Web Token (JWT)
            
//             const user = await usersService.update(data);
//             console.log(user)
//             setUser(user);
//         } catch {
//             setError('Log In Failed - Try Again');
//         }
//     }

//     return (
//         <div>
            
//             <form autoComplete="off" onSubmit={handleSubmit}>
//                 <h3>Edit Account Information</h3>
//                 <label>Name</label>
//                 <input type="text" name="name" value={data.name} onChange={handleChange} required />
//                 <label>Email</label>
//                 <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Email" required />
//                 <label>Password</label>
//                 <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required />
//                 <label>Confirm</label>
//                 <input type="password" name="confirm" value={data.confirm} onChange={handleChange} required />
//                 <button type="submit">SAVE CHANGES</button>
//             </form>
//             <p className="error-message">&nbsp;{error}</p>
//         </div>
//     );
// }