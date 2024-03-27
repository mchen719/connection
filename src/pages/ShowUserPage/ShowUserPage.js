import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProDetails from '../../components/ProDetails/ProDetails'
import SideBar from '../../components/SideBar/SideBar'
import styles from './ShowUserPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import * as usersAPI from '../../utilities/users-api'

// // note for future use params just works we don't need a string param entry
// // use effect fetch get user by id route, plug in with params.userId. place that RESPONSE into the state value to use.

// current major issue : we're unable to get the components to populate with the user data of the intended for viewing user.
// was able to change useState to null which allowed the forms to import/render but the data isn't populating. it seemed like it's no longer storing the foundUser data?
export default function ShowUserPage ({ user, setUser }) {
    const {userId} = useParams()
    const [showUser, setShowUser] = useState(null)

    useEffect(() => {
        async function getUser(){

            const foundUser = await usersAPI.getUserById(userId)
            setShowUser(foundUser)
        }
        getUser()
    }, [])
    return(
        <main className={styles.ShowUserPage}>
            <NavBar
            user={user}
            setUser={setUser}
            />
            <SideBar
            user={user}
            setUser={setUser}
            />
            {
                showUser && <>
            <AboutMe
            user={showUser}
            setUser={setShowUser}
            />
            <ProDetails
            user={showUser}
            setUser={setShowUser}
            />
                </>
            }
        </main>
    )
}
