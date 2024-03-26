import { useState } from 'react'
import styles from './AboutMe.module.scss'
import UserEdit from '../../components/UserEdit/UserEdit'

export default function AboutMe({ user, setUser }) {
    if (!user) return null
    const [showEditUser, setEditUser] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgavatar}>
                    <img src={user.profilePicture} className={styles.prophoto} />
                </div>
                <div className={styles.cardtext}>
                    <div className={styles.portada}>

                    </div>
                    <div className={styles.titletotal}>
                        <div className={styles.title}>Software Engineer</div>
                        <h2>{user.name}</h2>

                        <div className={styles.desc}>{user.summary}lorem ipsims wef weibwec</div>
                        <div className="actions">
                            {showEditUser ? <UserEdit user={user} setUser={setUser} /> : ""}
                            <button className={styles.editBtn} onClick={() => setEditUser(!showEditUser)}>
                                {showEditUser ? "Exit" : "Edit Profile"}
                            </button>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

{/* <div className={styles.cover}>
<img src={user.coverPhoto} />
<div className={styles.proPicContainer}>
<img src={user.profilePicture} className={styles.profilePicture} />
</div>
</div>
<div className={styles.content}>
<h1>{user.name}</h1>
<h2>Contact info: {user.email}</h2>
<h4>About Me: {user.summary}</h4> 
 </div> */}
