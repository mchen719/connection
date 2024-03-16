// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
import styles from './UserEducationItem.module.scss'

export default function UserEducationItem(userEducationItem){
    return (
        <div className={styles.UserEducationItem}>
            <div>
                <span>{userEducationItem.school}</span>
                <span>{userEducationItem.degree}</span>
                <span>{userEducationItem.fieldOfStudy}</span>
                <span>{userEducationItem.startDate}</span>
                <span>{userEducationItem.endDate}</span>
            </div>
        </div>
    )
}
