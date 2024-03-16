import {useState, useEffect} from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function JobPage(user, setUser) {
    return (
    <main className={StyleSheet.JobPage}>
            <h1>This is the job page</h1>
        	<NavBar
			user={user}
			setUser={setUser}
			/>
            <p> DESPERATION TEXT </p>
    </main >
    )
}
