// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
// will we have to make a component line item for endorsements here much like we're doing for education/xp/etc?
import styles from './UserSkillsItem.module.scss'

export default function UserSkillsItem({userSkillsItem}){
    return (
        <div className={styles.UserSkillsItem}>
            <div>
                <div className={styles.data}>Skill: {userSkillsItem.name}</div>
                <div className={styles.data}>Endorsement Count: {userSkillsItem.endorsements}</div>
            </div>
        </div>
    )
}
