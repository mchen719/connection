import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import NavBar from '../../components/NavBar/NavBar'
// import NotificationsList from '../../components/NotificationsList/NotificationsList
import ProDetails from '../../components/ProDetails/ProDetails'
import UserEdit from '../../components/UserEdit/UserEdit'
import SearchBar from '../../components/SearchBar/SearchBar'
import UserListings from '../../components/UserListings/UserListings'
import * as usersAPI from '../../utilities/users-api'
import * as educationAPI from '../../utilities/education-api'
import * as experienceAPI from '../../utilities/experience-api'
import styles from './ProfilePage.module.scss'
// import ChatBox from '../../components/ChatBox/ChatBox'

export default function ProfilePage({ user, setUser }) {

    const { userId } = useParams();
    const [userListings, setUserListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('')
    const [showUserForm, setShowUserForm] = useState(false)

    const handleSearch = () => {
        return !searchInput ? userListings : userListings.filter(userListing => userListing.name.toLowerCase().includes(searchInput.toLowerCase().trim()))
    }

    useEffect(() => {
        async function fetchUsers() {
            const users = await usersAPI.getAllUsers();
            setUserListings(users);
            setIsLoading(false);
        }
        fetchUsers();
    }, []);


    useEffect(() => {
        async function fetchUsers() {
            const users = await usersAPI.getAllUsers();
            setUserListings(users);
            setIsLoading(false);
        }
        fetchUsers();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <main className={styles.ProfilePage}>
            <NavBar className={styles.navBar} user={user} setUser={setUser} />
            <AboutMe className={styles.aboutMe} user={user} setUser={setUser} />
            <div className={styles.body}>
            <ProDetails className={styles.proDetails} user={user} setUser={setUser} />
            </div>

            {showUserForm ? <UserEdit user={user} setUser={setUser} onSubmit={() => setShowUserForm(!showUserForm) }/> : null }
            <label>Search the network for new connections below!</label>
            <label>Search the network for new connections below!</label>
            <SearchBar
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                userListings={userListings}
            />
            <UserListings userListings={handleSearch()} />
            {/* <ChatBox /> */}

        </main>
    )
}

{/* <UsersList userListings={handleSearch()} /> */}

{/* <ChatBox /> */}
{/* <SearchBar
    searchInput={searchInput}
    setSearchInput={setSearchInput}
/> */}