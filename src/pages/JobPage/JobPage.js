// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import NavBar from '../../components/NavBar/NavBar';
// import JobListings from '../../components/JobListings/JobListings';
// import * as jobsAPI from '../../utilities/jobs-api';

// const JobPage = ({ user, setUser }) => {
//     const { jobId } = useParams();
//     const [jobListings, setJobListings] = useState([]);
//     const [isLoading, setIsLoading] = useState(true); 

//     useEffect(() => {
//         async function fetchJobs() {
//             const jobs = await jobsAPI.getAllJobs();
//             setJobListings(jobs);
//             setIsLoading(false); 
//         }
//         fetchJobs();
//     }, []); 

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     console.log("Number of job listings:", jobListings.length);

//     return (
//         <div>
//             <NavBar user={user} setUser={setUser} />
//             <h1>Job Listings</h1>
//             {/* Pass all job listings to the JobListings component */}
//             <JobListings jobListings={jobListings} />
//         </div>
//     );
// };

// export default JobPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import JobListings from '../../components/JobListings/JobListings';
import * as jobsAPI from '../../utilities/jobs-api';

// Import the CreateJobForm component
import CreateJobForm from '../../components/JobForm/jobForm';

const JobPage = ({ user, setUser }) => {
    const { jobId } = useParams();
    const [jobListings, setJobListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        async function fetchJobs() {
            const jobs = await jobsAPI.getAllJobs();
            setJobListings(jobs);
            setIsLoading(false); 
        }
        fetchJobs();
    }, []); 

    if (isLoading) {
        return <div>Loading...</div>;
    }

    console.log("Number of job listings:", jobListings.length);

    return (
        <div>
            <NavBar user={user} setUser={setUser} />
            <h1>Job Listings</h1>
            {/* Pass all job listings to the JobListings component */}
            <JobListings jobListings={jobListings} />
            {/* Render the CreateJobForm component */}
            <CreateJobForm user={user} setUser={setUser} />
        </div>
    );
};

export default JobPage;
