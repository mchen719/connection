import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProDetails from '../../components/ProDetails/ProDetails'
import SideBar from '../../components/SideBar/SideBar'
import styles from './ShowUserPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'

// note for future use params just works we don't need a string param entry
// use effect fetch get user by id route, plug in with params.userId. place that RESPONSE into the state value to use.

// current major issue : we're unable to get the components to populate with the user data of the intended for viewing user.

// current major issue: we're unable to successfully get the route constructed for the nav links currently due to a problem with the link not allowing ternary expression tick marks

export default function ShowUserPage ({ user, setUser }) {
    let params = useParams()
    let {userId}=useParams('userId')
    const [showUser, setShowUser] = useState([])

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
            <AboutMe
                user = {showUser}
                setUser = {setShowUser}
            />
            <ProDetails
                user = {showUser}
                setUser = {setShowUser}
            />
        </main>
    )

}
