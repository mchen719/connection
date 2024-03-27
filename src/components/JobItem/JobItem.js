import styles from './JobItem.module.scss'

const JobListing = ({ jobItem }) => {
    return (
        <div key={ jobItem._id }className={styles.jobItem}>
            <h2>{jobItem.title}</h2>
            <div className={styles.jobData}>Company: {jobItem.company}</div>
            <div className={styles.jobData}>Location: {jobItem.location}</div>
            <div className={styles.jobData}>Description: {jobItem.description}</div>
        </div>
    );
};

export default JobListing;

// className="job-listing"
