import React from 'react'
import styles from './UserLogout.module.scss';
import { logOut } from '../../utilities/users-service';

function UserLogout({ user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
      }
  return (
    <div className={styles.UserLogOut}>
    <button className={styles.UserLogOutBtn} onClick={handleLogOut}>LOG OUT</button>
  </div>
  )
}

export default UserLogout