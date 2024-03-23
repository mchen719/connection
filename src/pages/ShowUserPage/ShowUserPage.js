import { useState } from 'react' 
import { useParams } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProDetails from '../../components/ProDetails/ProDetails'

export default function ShowUserPage () {
    let {userId}=useParams('userId')
    const [showUser, setShowUser] = useState([])

    return(
        <main className={styles.ShowUserPage}>
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