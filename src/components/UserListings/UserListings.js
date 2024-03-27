import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UserListings.module.scss'
import { Link, useNavigate } from 'react-router-dom';


export default function UserListings({ userListings }) {
    // Check if userListings is not an array or is empty
    if (!Array.isArray(userListings) || userListings.length === 0) {
        return (
            <main>
                <p>No user listings available.</p>
            </main>
        );
    }

    // Map over jobListings to display each job item
    const displayUsers = userListings.map(searchedUser => (
        <Link to={`/profile/${searchedUser._id}`} className={styles.NavButton} key={searchedUser._id}
        >
        <UserItem
            userItem={searchedUser}
        />
        </Link>
    )
    );

    return (
        <main className={styles.userListings}>
            {displayUsers}
        </main>
    );
}
