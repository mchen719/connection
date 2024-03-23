
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
import ChatBox from '../../components/ChatBox/ChatBox'

export default function ProfilePage({ user, setUser }) {
    const [searchInput, setSearchInput] = useState("")


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
            {/* <ChatBox /> */}
        </main>
    )
}
