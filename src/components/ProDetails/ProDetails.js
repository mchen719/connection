import UserEducationItem from '../UserEducationItem/UserEducationItem'
import UserExperienceItem from '../UserExperienceItem/UserExperienceItem'
import UserSkillsItem from '../UserSkillsItem/UserSkillsItem'
import styles from './ProDetails.module.scss'

// possible that we don't need to pass down the edu/exp/skills props in function params...must confirm
export default function ProDetails({ user, education, experience, skills }) {
    const userExperienceItems = user.experience.map(exp => (
        <UserExperienceItem
        userExperienceItem={exp}
        key={exp._id}
        />)
    )

    const userEducationItems = user.education.map(edu => (
        <UserEducationItem
        userEducationItem={edu}
        key={edu._id}
        /> )
    )

    const userSkillsItems = user.skills.map(skill => (
        <UserSkillsItem
        userSkillsItem={skill}
        key={skill._id}
        />)
    )
    return (
        <div className={styles.ProDetails}>
            <h2>Professional Experience</h2>
            <div className={styles.experienceContainer}>

            {userExperienceItems.length ?
            userExperienceItems
        :
              <h3>~No Experience To Show~</h3>
            }
             </div>
             <h2>Education</h2>
             <div className={styles.educationContainer}>
            {userEducationItems.length ?
             userEducationItems :
              <h3>~No Education To Show~</h3>
            }
             </div>
             <h2>Skills</h2>
             <div className={styles.skillsContainer}>
            {userSkillsItems.length ?
              userSkillsItems :
              <h3>~No Skills To Show~</h3>
            }
            </div>
    </div>

    )
}
