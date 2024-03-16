import styles from './NavBar.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo'
import UserLogOut from '../UserLogout/UserLogout'

export default function NavBar(user, setUser) {
	return (
		<nav className={styles.NavBar}>
      <div className={styles.logo}>
         <Logo />
      </div>
			<button className={styles.navButtons}>
			<Link to="/home" className={styles.NavButton}>Home/Feed</Link>
			<Link to="/profile" className={styles.NavButton}>Profile Page</Link>
			<Link to="/jobs" className={styles.NavButton}>Job Listings</Link>
			</button>
			<UserLogOut
			user={user}
			setUser={setUser}
			/>
		</nav>
	)
}
