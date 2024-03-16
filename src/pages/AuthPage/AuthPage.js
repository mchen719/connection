import { useState } from 'react';
import styles from './AuthPage.module.scss';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      {showLogin ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
      <div>
        <button className={styles.h3}onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </div>
    </main>
  );
}