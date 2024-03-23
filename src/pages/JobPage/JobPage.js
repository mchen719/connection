import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar'
import JobListings from '../../components/JobListings/JobListings';
import * as jobsAPI from '../../utilities/jobs-api';

const JobPage = ({ user, setUser }) => {
    const { jobId } = useParams();
    const [jobListings, setJobListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('')

    const handleSearch = () => {
        return !searchInput ? jobListings : jobListings.filter(jobListing => jobListing.title.toLowerCase().includes(searchInput.toLowerCase().trim()))
    }

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
            <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            jobListings={jobListings}
            />
            <JobListings jobListings={handleSearch()} />
        </div>
    );
};

export default JobPage;
