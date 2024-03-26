// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
import styles from './UserEducationItem.module.scss'

export default function UserEducationItem({userEducationItem}){
    return (
        <div className={styles.UserEducationItem}>
            <div>
                <div className={styles.data}>School: {userEducationItem.school}</div>
                <div className={styles.data}>Degree: {userEducationItem.degree}</div>
                <div className={styles.data}>Field of Study: {userEducationItem.fieldOfStudy}</div>
                <div className={styles.data}>Start Date: {userEducationItem.startDate}</div>
                <div className={styles.data}>End Date: {userEducationItem.endDate}</div>
            </div>
        </div>
    )
}
