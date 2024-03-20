import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import JobListings from '../../components/JobListings/JobListings';
import * as jobsAPI from '../../utilities/jobs-api';

const JobPage = ({ user, setUser }) => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [jobListings, setJobListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    useEffect(() => {
        async function fetchJobs() {
            const jobs = await jobsAPI.getAllJobs();
            setJobListings(jobs);

            const foundJob = jobs.find(job => job.id === jobId);
            if (foundJob) {
                setJob(foundJob);
            }
            setIsLoading(false); // Set loading to false after fetching data
        }
        fetchJobs();
    }, [jobId]); 

    // Check if data is loading, display loading indicator if true
    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log("Number of job listings:", jobListings.length);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <h1>Job Listings</h1>
            {/* Render the specific job if found */}
            {jobListings.length > 0 && job && <JobListings jobListings={[job]} />}
        </div>
    );
};

export default JobPage;
