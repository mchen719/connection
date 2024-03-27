import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import JobListings from '../../components/JobListings/JobListings';
import styles from './JobPage.module.scss';
import * as jobsAPI from '../../utilities/jobs-api';
import CreateJobForm from '../../components/JobForm/JobForm';

const JobPage = ({ user, setUser }) => {
<<<<<<< HEAD
	const { jobId } = useParams();
	const [jobListings, setJobListings] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchInput, setSearchInput] = useState('');
=======
    const { jobId } = useParams();
    const [jobListings, setJobListings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchInput, setSearchInput] = useState('')
    const [showCreateForm, setShowCreateForm] = useState(false)
>>>>>>> 8ba03b9907f4c735d00ac1afe3faf3ae147d3feb

	const handleSearch = () => {
		return !searchInput
			? jobListings
			: jobListings.filter((jobListing) =>
					jobListing.title
						.toLowerCase()
						.includes(searchInput.toLowerCase().trim())
				);
	};

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

<<<<<<< HEAD
	console.log('Number of job listings:', jobListings.length);

	return (
		<div className={styles.jobPage}>
			<NavBar user={user} setUser={setUser} />
			<SideBar user={user} setUser={setUser} />
			<h1>Job Listings</h1>
			{/* Pass all job listings to the JobListings component */}
			<h3>Search our catalogue of jobs below!</h3>
			<SearchBar
				searchInput={searchInput}
				setSearchInput={setSearchInput}
				jobListings={jobListings}
			/>
			<JobListings jobListings={handleSearch()} />
			<CreateJobForm user={user} setUser={setUser} />
		</div>
	);
=======
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
            {showCreateForm ? <CreateJobForm user={user} setUser={setUser} /> : null}
        </div>
    );
>>>>>>> 8ba03b9907f4c735d00ac1afe3faf3ae147d3feb
};

export default JobPage;
