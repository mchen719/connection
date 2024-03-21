import { useState } from 'react'
import styles from './AboutMe.module.scss'

export default function AboutMe( {user} ) {
    if(!user) return null

    return (
        <div className={styles.AboutMe}>
            <div className={styles.cover}>
                <img src={user.coverPhoto} />
            </div>
        <div className={styles.content}>
            <h1>{user.name}</h1>
            <h2>Contact info: {user.email}</h2>
            <h4>About Me: {user.summary}</h4>
            </div>
            <div className={styles.proPicContainer}>
                <img src={user.profilePicture} className={styles.profilePicture} />
            </div>
        </div>
    )
}
