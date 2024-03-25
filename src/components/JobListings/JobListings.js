

import React from 'react';
import JobItem from '../JobItem/JobItem';
import styles from './JobListings.module.scss'

export default function JobListings({ jobListings }) {
    // Check if jobListings is not an array or is empty
    if (!Array.isArray(jobListings) || jobListings.length === 0) {
        return (
            <main>
                <p>No job listings available.</p>
            </main>
        );
    }

    // Map over jobListings to display each job item
    const displayJobs = jobListings.map(job =>
        <JobItem
            key={job._id}
            jobItem={job}
        />
    );

    return (
        <main className={styles.jobListings}>
            {displayJobs}
        </main>
    );
}
