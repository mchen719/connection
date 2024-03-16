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

export default function ProfilePage({ user, setUser }) {
    // concept: const [objectType, setObjectType] = useState([data-type])
    // const [searchInput, setSearchInput] = useState('')
    //  const navigate = useNavigate()

    // const handleSearch = () => {
    //    return !searchInput ? null : users.filter(user => user.name.toLowerCase().includes(searchInput))
    // }
    // useEffect(function() {
    //     async function getUsers() {
    //         // CONNECTIONS model potentially required? No current pathway to literally join an array of user-friends
    //         const users = await usersAPI.getAll()
    //         searchedUsers = users.reduce((users, searchInput) => {
    //             const name = searchedUsers.name
    //             return users.find((u) => {
    //                 return u.name.toLowerCase().includes(searchInput)
    //             }) ? searchedUser : [...users]
    //         })
    //         setUsers(users)
    //     }
    // })

    /*-- EVENT HANDLERS --*/

    // below: example handler for any potential needs on profile page.
    // async function handleAddToOrder(itemId) {
    //     const updatedCart = await ordersAPI.addItemToCart(itemId)
    // }

    return (
        <main className={styles.ProfilePage}>
            <h1>PROFILE PLACEHOLDER!!!</h1>
            <NavBar />
            <AboutMe />
            <ProDetails />
        </main>
    )
}
