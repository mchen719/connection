import styles from './AboutMe.module.scss'

export default function AboutMe( user ) {
    if(!user) return null

    return (
        <div className={styles.AboutMe}>
            <div className={styles.cover}>
                <img src={user.coverPhoto} />
            </div>
        <h1>{user.name}</h1>
        <h2>Contact info: {user.email}</h2>
        <div className={styles.proPic}>
            <img src={user.profilePicture} />
        </div>
        <h4>About Me: {user.summary}</h4>
        </div>
    )
}
