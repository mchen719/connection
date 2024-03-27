// follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
// MUST DESTRUCTURE WITH CURLY BRACES FOR ALL STUFF, MAJOR THING.
import styles from './UserExperienceItem.module.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ExperienceUpdateForm from '../ExperienceUpdateForm/ExperienceUpdateForm'

export default function UserExperienceItem({userExperienceItem}){
// Below: Not working correctly. Crashing the browser.
    // useEffect(() => {
    //     if (experience && props.user._id === experience.userId){
    //         setAllowChanges(true)
    //     }
    // }, [props.user, experience])

    return (
        <div className={styles.UserExperienceItem}>
            <div>
                <div className={styles.data}>Job Title: {userExperienceItem.title}</div>
                <div className={styles.data}>Company Name: {userExperienceItem.company}</div>
                <div className={styles.data}>Location: {userExperienceItem.location}</div>
                <div className={styles.data}>Start Date: {userExperienceItem.startDate}</div>
                <div className={styles.data}>End Date: {userExperienceItem.endDate}</div>
                <div className={styles.data}>Job Description: {userExperienceItem.description}</div>
            </div>
        </div>
    )
}


// // follow unit 3 project concept of line item, this must have its props correctly passed down via the main app.
// // MUST DESTRUCTURE WITH CURLY BRACES FOR ALL STUFF, MAJOR THING.
// import styles from './UserExperienceItem.module.scss'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import ExperienceUpdateForm from '../ExperienceUpdateForm/ExperienceUpdateForm'

// export default function UserExperienceItem({userExperienceItem}, props){
//     const [showUpdate, setShowUpdate] = useState(false)
//     const [allowChanges, setAllowChanges] = useState(false)
//     const [experience, setExperience] = useState({
//         title:'',
//         company:'',
//         location:'',
//         startDate:'',
//         endDate:''
//     })
//     const {id} = useParams()
//     useEffect(() => {
//         const fetchExperience = async () => {
//             try {
//                 const data = await props.updateIndividualExperience(id)
//                 setExperience(data)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         fetchExperience()
//     })
// // Below: Not working correctly. Crashing the browser.
//     // useEffect(() => {
//     //     if (experience && props.user._id === experience.userId){
//     //         setAllowChanges(true)
//     //     }
//     // }, [props.user, experience])

//     return (
//         <div className={styles.UserExperienceItem}>
//             <div>
//                 <div>{userExperienceItem.title}</div>
//                 <div>{userExperienceItem.company}</div>
//                 <div>{userExperienceItem.location}</div>
//                 <div>{userExperienceItem.startDate}</div>
//                 <div>{userExperienceItem.endDate}</div>
//                 <button onClick={()=> setShowUpdate(!showUpdate)}>Reveal Update Form</button>:
//                 <></>
//                 {allowChanges && showUpdate ? <UpdateExperienceForm id={id} updateExperience={props.updateExperience} setShowUpdate={setShowUpdate} setExperience={setExperience} experience={experience} token={props.token} setToken={props.token}/>: <></>}
//                 {allowChanges? <button onClick={handleDelete}>Delete Experience</button>:<></>}
//             </div>
//         </div>
//     )
// }
