<<<<<<< HEAD
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import AboutMe from '../../components/AboutMe/AboutMe'
// import ProDetails from '../../components/ProDetails/ProDetails'
=======
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AboutMe from '../../components/AboutMe/AboutMe'
import ProDetails from '../../components/ProDetails/ProDetails'
import SideBar from '../../components/SideBar/SideBar'
import styles from './ShowUserPage.module.scss'
import NavBar from '../../components/NavBar/NavBar'
>>>>>>> 280f9c87f15c201cfa5d488924bc3e9e4549112b

// // note for future use params just works we don't need a string param entry
// // use effect fetch get user by id route, plug in with params.userId. place that RESPONSE into the state value to use.

<<<<<<< HEAD
// export default function ShowUserPage () {
//     let params = useParams()
//     let {userId}=useParams('userId')
//     const [showUser, setShowUser] = useState([])

//     return(
//         <main className={styles.ShowUserPage}>
//             <AboutMe
//                 user = {showUser}
//                 setUser = {setShowUser}
//             />
//             <ProDetails
//                 user = {showUser}
//                 setUser = {setShowUser}
//             />
//         </main>
//     )

// }

import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProDetails from '../../components/ProDetails/ProDetails';

export default function ShowUserPage() {
    const { userId } = useParams(); // Get the userId from the URL params
    const [showUser, setShowUser] = useState(null); // Initialize state for storing user data
    const history = useHistory(); // Access history object for redirection

    useEffect(() => {
        // Fetch user data from the backend API using the userId
        fetch(`/api/users/${userId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                return response.json();
            })
            .then(data => {
                setShowUser(data); // Set the user data in state
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, [userId]); // Fetch user data whenever userId changes

    useEffect(() => {
        // Check if the current user is friends with the requested user
        fetch(`/api/users/${userId}/check-friendship`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to check friendship');
                }
                return response.json();
            })
            .then(data => {
                if (!data.isFriend) {
                    // Redirect to an unauthorized page or display a message
                    history.push('/unauthorized'); // Redirect to an unauthorized page
                    // Alternatively, display a message indicating the user is not authorized to view the profile
                    // alert('You are not authorized to view this profile');
                }
            })
            .catch(error => {
                console.error('Error checking friendship:', error);
            });
    }, [userId]); // Check friendship status whenever userId changes

    return (
        <main>
            {showUser && (
                <>
                    <AboutMe user={showUser} setUser={setShowUser} />
                    <ProDetails user={showUser} setUser={setShowUser} />
                </>
            )}
        </main>
    );
=======
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
>>>>>>> 280f9c87f15c201cfa5d488924bc3e9e4549112b
}
