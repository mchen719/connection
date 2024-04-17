import { useState } from 'react';
import styles from './AuthPage.module.scss';
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';


export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className={styles.AuthPage}>
      <a className={styles.portfolioLink} href="https://portfolio.christopherlazariuk.me">Portfolio Home</a>
      <div className={styles.body}>
        {showLogin ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
        <button className={styles.loginbtn} onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </div>
    </main>
  );
}
