import { useState } from 'react';
import AboutMeSideBar from '../AboutMeSideBar/AboutMeSideBar.js';
import styles from './SideBar.module.scss';

export default function SideBar({ user, setUser }) {
	// const updateIndividualExperience = async (id) => {
	//     try {
	//         const response = await fetch(`/api/experience/${id}`, {
	//             method: 'PUT',
	//             headers: {
	//                 'Content-Type': 'application/json',
	//                 'Authorization': `Bearer ${token}`
	//             },
	//             body: JSON.stringify(newExperienceData)
	//         })
	//         const data = await response.json()
	//         return data
	//     } catch (error) {
	//         console.error(error)
	//     }
	// } // broken and buggy fail attempt.

	return (
		<main className={styles.SideBar}>
			<AboutMeSideBar user={user} setUser={setUser} />
			connections: coming soon
		</main>
	);
}
