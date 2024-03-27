import styles from './ExperienceUpdateForm.module.scss'

export default function ExperienceUpdateForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = props.updateExperience(props.experience, props.id, props.token)
            props.setExperience(data)
            props.setShowUpdate(false)
        } catch (error) {
            console.error(error)
        }
    }
    const handleChange = (e) => {
        props.setExperience({...props.experience, [e.target.name]: e.target.value })
    }

    return (
        <form className={styles.update} onSubmit={handleSubmit}>
            <h2>Update Experience Below</h2>
            <input className={styles.input} placeholder='title' type='text' name='title' value={props.experience.title} onChange={handleChange}/>
            <input className={styles.input} placeholder='company' type='text' name='company' value={props.experience.company} onChange={handleChange}/>
            <input className={styles.input} placeholder='location' type='text' name='location' value={props.experience.location} onChange={handleChange}/>
            <input className={styles.input} placeholder='start date' type='text' name='startDate' value={props.experience.startDate} onChange={handleChange}/>
            <input className={styles.input} placeholder='end date' type='text' name='endDate' value={props.experience.endDate} onChange={handleChange}/>
            <input className={styles.submit} type="submit" value="Submit Update Data"/>

        </form>
    )
}
