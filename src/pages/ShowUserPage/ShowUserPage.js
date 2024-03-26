import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProDetails from '../../components/ProDetails/ProDetails'

// note for future use params just works we don't need a string param entry
// use effect fetch get user by id route, plug in with params.userId. place that RESPONSE into the state value to use.

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
