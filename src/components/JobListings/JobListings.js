
import React from 'react';

const JobListing = ({ job }) => {
    return (
        <div className="job-listing">
            <h2>{job.title}</h2>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
            <p>Description: {job.description}</p>
        </div>
    );
};

export default JobListing;


