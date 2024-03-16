import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams

const JobPage = () => {
  const { jobId } = useParams(); // Access the jobId parameter from the URL
  const [job, setJob] = useState(null); // State to store the job data

  useEffect(() => {
    // Fetch the job data based on jobId when the component mounts
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobs/${jobId}`); // Use fetch to make the request
        if (!response.ok) {
          throw new Error('Failed to fetch job');
        }
        const data = await response.json(); // Parse the JSON response
        setJob(data); // Update the job state with the fetched data
      } catch (error) {
        console.error('Error fetching job:', error);
      }
    };

    fetchJob(); // Call the fetchJob function
  }, [jobId]); // Dependency array ensures useEffect runs only when jobId changes

  return (
    <div>
      <h1>Job Details</h1>
      {job ? (
        <div>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
          <ul>
            {job.requirements.map((requirement, index) => (
              <li key={index}>{requirement}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No jobs to currently display</p>
      )}
    </div>
  );
};

export default JobPage;
