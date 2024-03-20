
// import JobItem from '../JobItem/JobItem';

// export default function JobListings({ jobListings }) {
//     console.log(jobListings);

//     // Check if jobListings is an array before mapping over it
//     if (!Array.isArray(jobListings)) {
//         console.error('jobListings is not an array');
//         return null; // or display an error message
//     }

//     const displayJobs = jobListings.map(job =>
//         <JobItem
//             key={job._id}
//             jobItem={job}
//         />
//     );

//     return (
//         <main>
//             {displayJobs}
//         </main>
//     );
// }

import React from 'react';
import JobItem from '../JobItem/JobItem';

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
        <main>
            {displayJobs}
        </main>
    );
}

