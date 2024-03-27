import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AboutMe from '../../components/AboutMe/AboutMe';
import ProDetails from '../../components/ProDetails/ProDetails';
import SideBar from '../../components/SideBar/SideBar';
import styles from './ShowUserPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import * as usersAPI from '../../utilities/users-api';

export default function ShowUserPage({ user, setUser }) {
    const { userId } = useParams();
    const [showUser, setShowUser] = useState(null);
    const [isFriendAdded, setIsFriendAdded] = useState(false);
    const [showFriendAddedPopup, setShowFriendAddedPopup] = useState(false);

    useEffect(() => {
        async function getUser() {
            const foundUser = await usersAPI.getUserById(userId);
            setShowUser(foundUser);
        }
        getUser();
    }, [userId]);

    const addFriend = async () => {
        try {
            setIsFriendAdded(true);
            setShowFriendAddedPopup(true);
        } catch (error) {
            console.error('Error adding friend:', error);
        }
    };


    return (
        <main className={styles.ShowUserPage}>
            <NavBar user={user} setUser={setUser} />
            <SideBar user={user} setUser={setUser} />

            <div className={styles.content}>
            <div className={styles.subContent}>
            {showUser && (
                <div className={styles.testHolder}>
                    <AboutMe user={showUser} setUser={setShowUser} />
                    <div className={styles.friendZone}>
                        {!isFriendAdded && (
                        <button className={styles.friendButton} onClick={addFriend}>Add Friend</button>
                    )}
                    </div>
                    {showFriendAddedPopup && (
                <div className={styles.popup}>
                    Friend added successfully!
                </div>
            )}

                    <ProDetails user={showUser} setUser={setShowUser} />

                </div>
            )}
            </div>
            </div>

        </main>
    );
}