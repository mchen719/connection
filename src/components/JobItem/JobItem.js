
const JobListing = ({ jobItem }) => {
    return (
        <div key={ jobItem._id } >
            <h2>{jobItem.title}</h2>
            <p>Company: {jobItem.company}</p>
            <p>Location: {jobItem.location}</p>
            <p>Description: {jobItem.description}</p>
        </div>
    );
};

export default JobListing;

// className="job-listing"