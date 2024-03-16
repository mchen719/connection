import styles from './NavBar.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo'

export default function NavBar() {
	return (
		<nav className={styles.NavBar}>
      <div className={styles.logo}>
         <Logo />
      </div>
			<button className={styles.navButtons}>
			<Link to="" className={styles.NavButton}>Home/Feed</Link>
			<Link to="" className={styles.NavButton}>Profile Page</Link>
			<Link to="" className={styles.NavButton}>Job Listings</Link>
			</button>

		</nav>
	)
}
