
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import NavBar from '../../components/NavBar/NavBar'
import UserEdit from '../../components/UserEdit/UserEdit'
// import NotificationsList from '../../components/NotificationsList/NotificationsList
import ProDetails from '../../components/ProDetails/ProDetails'
// import SearchBar from '../../SearchBar/SearchBar

import * as educationAPI from '../../utilities/education-api'
import * as experienceAPI from '../../utilities/experience-api'
import * as skillAPI from '../../utilities/skill-api'
import * as usersAPI from '../../utilities/users-api'
import styles from './ProfilePage.module.scss'

export default function ProfilePage({ user, setUser }) {
    return (
        <main className={styles.ProfilePage}>
            <div>PROFILE PLACEHOLDER!!!</div>
            <NavBar
                user={user}
                setUser={setUser}
            />
            <AboutMe
                user={user}
                setUser={setUser}
            />
            <ProDetails
                user={user}
                setUser={setUser}
            />
            <UserEdit
                user={user}
                setUser={setUser}
            />
        </main>
    )
}
