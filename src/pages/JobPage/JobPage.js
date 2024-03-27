import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobListings from '../../components/JobListings/JobListings';
import styles from './JobPage.module.scss'
import CreateJobForm from '../../components/JobForm/JobForm';
import * as jobsAPI from '../../utilities/jobs-api';

const JobPage = ({ user, setUser }) => {
    const [jobListings, setJobListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('');
    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleSearch = () => {
        return !searchInput ? jobListings : jobListings.filter(jobListing => jobListing.title.toLowerCase().includes(searchInput.toLowerCase().trim()))
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const jobs = await jobsAPI.getAllJobs();
            setJobListings(jobs);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching job listings:', error);
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.jobPage}>
            <NavBar user={user} setUser={setUser} />
            <div className={styles.topSpace}>
                <div className={styles.nextTopSpace}>
                    <h1>Job Listings</h1>
                    <h3>Search our catalogue of jobs below!</h3>
                    <SearchBar
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                        jobListings={jobListings}
                    />
                </div>
                <SideBar user={user} setUser={setUser} />
            </div>
            <JobListings jobListings={handleSearch()} />
            <div className={styles.createFormToggle} onClick={() => setShowCreateForm(!showCreateForm)}>Create a new job posting here!</div>
            {showCreateForm && <CreateJobForm onClose={() => setShowCreateForm(false)} setJobListings={setJobListings} />}        </div>
    );
};

export default JobPage;
