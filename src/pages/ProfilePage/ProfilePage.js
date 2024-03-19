
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import NavBar from '../../components/NavBar/NavBar'
// import NotificationsList from '../../components/NotificationsList/NotificationsList
import ProDetails from '../../components/ProDetails/ProDetails'
// import SearchBar from '../../components/SearchBar/SearchBar'

import * as educationAPI from '../../utilities/education-api'
import * as experienceAPI from '../../utilities/experience-api'
import * as skillAPI from '../../utilities/skill-api'
import * as usersAPI from '../../utilities/users-api'
import styles from './ProfilePage.module.scss'

export default function ProfilePage({ user, setUser }) {
    const [searchInput, setSearchInput] = useState("")
    return (
        <main className={styles.ProfilePage}>
            <NavBar
                user={user}
                setUser={setUser}
            />
            {/* <SearchBar /> */}
            <AboutMe
                user={user}
                setUser={setUser}
            />
            <ProDetails
                user={user}
                setUser={setUser}
            />
        </main>
    )
}
