import styles from './UserItem.module.scss'

export default function UserItem({ userItem }) {
    return (
        <div className={styles.userItemCard}>
            <div className={styles.userItemPic}>
                <img className={styles.userItemPicFile} src={userItem.profilePicture} />
            </div>

        <div key={ userItem._id }className={styles.userItem}>
            <div className={styles.userData}>{userItem.name}</div>
            <div className={styles.userEmail}>{userItem.email}</div>
            </div>
        </div>
    );
}

// className="user-listing"

// userItem isn't correctly returning atm.
