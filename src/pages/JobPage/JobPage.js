// // import React, { useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom'; // Import useParams

// // const JobPage = () => {
// //   const { jobId } = useParams(); // Access the jobId parameter from the URL
// //   const [job, setJob] = useState(null); // State to store the job data
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams
// import NavBar from '../../components/NavBar/NavBar';

// const JobPage = ({user, setUser}) => {
//   const { jobId } = useParams(); // Access the jobId parameter from the URL
//   const [job, setJob] = useState(null); // State to store the job data

// //   useEffect(() => {
// //     // Fetch the job data based on jobId when the component mounts
// //     const fetchJob = async () => {
// //       try {
// //         const response = await fetch(`/api/jobs/${jobId}`); // Use fetch to make the request
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch job');
// //         }
// //         const data = await response.json(); // Parse the JSON response
// //         setJob(data); // Update the job state with the fetched data
// //       } catch (error) {
// //         console.error('Error fetching job:', error);
// //       }
// //     };


// //     fetchJob(); // Call the fetchJob function
// //   }, [jobId]); // Dependency array ensures useEffect runs only when jobId changes

// //   return (
// //     <div>
// //       <h1>Job Details</h1>
// //       {job ? (
// //         <div>
// //           <h2>{job.title}</h2>
// //           <p>{job.company}</p>
// //           <p>{job.location}</p>
// //           <p>{job.description}</p>
// //           <ul>
// //             {job.requirements.map((requirement, index) => (
// //               <li key={index}>{requirement}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       ) : (
// //         <p>No jobs to currently display</p>
// //       )}
// //     </div>
// //   );
// // };

//     // fetchJob(); // Call the fetchJob function
//   }, [jobId] // Dependency array ensures useEffect runs only when jobId changes

//   return (
//     <div>
//       <NavBar user={user} setUser={setUser}/> 
//       <h1>Job Details</h1>
//       {job ? (
//         <div>
//           <h2>{job.title}</h2>
//           <p>{job.company}</p>
//           <p>{job.location}</p>
//           <p>{job.description}</p>
//           <ul>
//             {job.requirements.map((requirement, index) => (
//               <li key={index}>{requirement}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>No jobs to currently display</p>
//       )}
//     </div>
//   );
// ;

// export default JobPage;

import React, { useEffect, useState } from 'react';
import { getAllJobs } from '../../utilities/jobs-api';
import JobListing from '../../components/JobListings/JobListings';

const JobListingPage = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const jobsData = await getAllJobs();
            setJobs(jobsData);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    return (
        <div className="job-listing-page">
            <h1>Job Listings</h1>
            {jobs.map((job) => (
                <JobListing key={job._id} job={job} />
            ))}
        </div>
    );
};

export default JobListingPage;
