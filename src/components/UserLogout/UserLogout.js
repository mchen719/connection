import React from 'react'
import styles from './UserLogOut.module.scss';
import { logOut } from '../../utilities/users-service';

function UserLogout({user, setUser }) {
    function handleLogOut() {
        logOut();
        setUser(null);
      }
  return (
    <div className={styles.UserLogOut}>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
    <div>{user.name}</div>
    <div className={styles.email}>{user.email}</div>
  </div>
  )
}

export default UserLogout