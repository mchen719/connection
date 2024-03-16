import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from "./UserEdit.module.scss"

export default function UserEdit({ setUser }) {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setData({ ...data, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            
            const user = await usersService.update(data);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <div>

            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h3>Edit Account Information</h3>
                <label>Name</label>
                <input type="text" name="name" value={data.name} onChange={handleChange} required />
                <label>Email</label>
                <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Email" required />
                <label>Password</label>
                <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={data.confirm} onChange={handleChange} required />
                <button type="submit">SAVE CHANGES</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}