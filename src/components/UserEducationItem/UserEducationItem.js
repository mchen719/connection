// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
import styles from './UserEducationItem.module.scss'

export default function UserEducationItem({userEducationItem}){
    return (
        <div className={styles.UserEducationItem}>
            <div>
                <div className={styles.school}>School: {userEducationItem.school}</div>
                <div className={styles.degree}>Degree: {userEducationItem.degree}</div>
                <div className={styles.fieldOfStudy}>Field of Study: {userEducationItem.fieldOfStudy}</div>
                <div className={styles.startDate}>Start Date: {userEducationItem.startDate}</div>
                <div className={styles.endDate}>End Date: {userEducationItem.endDate}</div>
            </div>
        </div>
    )
}
