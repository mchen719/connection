import styles from './SideBar.module.scss';
import { useState, useEffect } from 'react'

export default function SideBar({ user }) {
	const [showConnections, setShowConnections] = useState(false)
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
				{/* <div className={styles.connectionsButton} onClick={() => setShowConnections(!showConnections)}>Connections: {user.connections.length}</div> */}
				{showConnections ? user.connections.map(connection => <div className={styles.connection}> connection.name </div>) : null }
			</div>
		</div>
	);
}
