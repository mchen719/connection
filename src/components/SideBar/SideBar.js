import { useState } from 'react';
import AboutMeSideBar from '../AboutMeSideBar/AboutMeSideBar.js';
import styles from './SideBar.module.scss';

export default function SideBar({ user }) {
	if (!user) {
		return null;
	}

	return (
		<div className={styles.sideBar}>
			<div className={styles.photo}>
				<img src={user.profilePicture} className={styles.profilePicture} />
			</div>

			<div className={styles.content}>
				<h1>{user.name}</h1>
				<h2>Contact info: {user.email}</h2>
			</div>
		</div>
	);
}
