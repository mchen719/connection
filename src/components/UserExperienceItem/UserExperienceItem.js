// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
import styles from '.UserExperienceItem.module.scss'

export default function UserExperienceItem(userExperienceItem){
    return (
        <div className={styles.UserExperienceItem}>
            <div>
                <span>{userExperienceItem.title}</span>
                <span>{userExperienceItem.company}</span>
                <span>{userExperienceItem.location}</span>
                <span>{userExperienceItem.startDate}</span>
                <span>{userExperienceItem.endDate}</span>
            </div>
        </div>
    )
}
