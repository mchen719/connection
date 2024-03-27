import styles from './NavBar.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'
import Logo from '../Logo/Logo'
import UserLogOut from '../UserLogout/UserLogout'

export default function NavBar({ user, setUser }) {
	return (

		<div className={styles.NavBar}>
			<div className={styles.logo}>
				<Logo />
			</div>
			<div className={styles.navButtons}>
				<Link to="/home" className={styles.NavButton}>Home</Link>
				<Link to="/profile" className={styles.NavButton}>Profile</Link>
				<Link to="/jobs" className={styles.NavButton}>Jobs</Link>
			</div>
			<div className={styles.logout}>
				<UserLogOut
					user={user}
					setUser={setUser}
				/>
			</div>
		</div>

	)
}
