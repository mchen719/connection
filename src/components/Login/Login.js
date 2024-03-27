import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './Login.module.scss'

export default function Login({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
        setError('');
    }

    async function handleSubmit(evt) {
        // Prevent form from being submitted to the server
        evt.preventDefault();
        try {
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            console.log("hello")
            const user = await usersService.login(credentials);
            console.log("good bye")
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
                <h3>Log In</h3>
                <label>Email</label>
                <input type="text" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
                <label>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
                <button className={styles.loginBtn} type="submit">LOG IN</button>
                <div className={styles.social}>
                    <div className={styles.go}> <svg className={styles.goIcon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
                        <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                    </svg>Google</div>
                    <div className={styles.fb}><svg className={styles.fbIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" /></svg>  Facebook</div>
                </div>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}