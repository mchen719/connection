
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
// import Logo from '../../components/Logo/Logo' // What if we include the logo within the nav bar itself to simplify?
import NavBar from '../../components/NavBar/NavBar'
// import NotificationsList from '../../components/NotificationsList/NotificationsList
import ProDetails from '../../components/ProDetails/ProDetails'
// import SearchBar from '../../SearchBar/SearchBar

import * as educationAPI from '../../utilities/education-api'
import * as experienceAPI from '../../utilities/experience-api'
import * as skillAPI from '../../utilities/skill-api'
import * as usersAPI from '../../utilities/users-api'
import styles from './ProfilePage.module.scss'
import UserLogout from '../../components/UserLogout/UserLogout'

export default function ProfilePage( user, setUser ) {
    return (
        <main className={styles.ProfilePage}>
            <div>PROFILE PLACEHOLDER!!!</div>
			<NavBar
				user={user}
				setUser={setUser}
			/>
            <AboutMe />
            <ProDetails />
        </main>
    )
}
