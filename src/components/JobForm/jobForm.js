// import React, { useState } from 'react';
// import sendRequest from '../../utilities/send-request'
// import * as jobsAPI from '../../utilities/jobs-api';

// const CreateJobForm = ({ user, setUser }) => {
//     const [formData, setFormData] = useState({
//         title: 'Sample Title',
//         company: 'Sample Company',
//         location: 'Sample Location',
//         description: 'Sample Description'
//     });

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         console.log('Form Data:', formData);
        
//         if (!formData) {
//             console.error('Error: formData is not initialized.');
//             return;
//         }
    
//         const formDataJson = JSON.stringify(formData);
    
//         try {
//             // Create the job using the API
//             console.log('Creating job...');
//             const newJob = await jobsAPI.createJob(formDataJson, 'POST'); 
//             console.log('New job created:', newJob);
//         } catch (error) {
//             console.error('Error creating job:', error);
//         }
//     };
    

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="title">Title:</label>
//             <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

//             <label htmlFor="company">Company:</label>
//             <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required />

//             <label htmlFor="location">Location:</label>
//             <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} required />

//             <label htmlFor="description">Description:</label>
//             <textarea id="description" name="description" value={formData.description} onChange={handleChange} required></textarea>

//             <button type="submit">Create Job</button>
//         </form>
//     );
// };

// export default CreateJobForm;

import React, { useState } from 'react';
import sendRequest from '../../utilities/send-request';
import * as jobsAPI from '../../utilities/jobs-api';

const CreateJobForm = ({ user }) => {
    const [formData, setFormData] = useState({
        title: 'Sample Title',
        company: 'Sample Company',
        location: 'Sample Location',
        description: 'Sample Description'
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log('Form Data:', formData);
        
        if (!formData) {
            console.error('Error: formData is not initialized.');
            return;
        }
        
        try {
            // Create the job using the API
            console.log('Creating job...');
            await sendRequest('/api/jobs', 'POST', formData);
            console.log('Job created successfully');
        } catch (error) {
            console.error('Error creating job:', error);
        }
    };

    return (
        <div>
            <h2>Create a Job Post</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter job title"
                        />
                    </div>
                    <div>
                        <label htmlFor="company">Company</label>
                        <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
                        />
                    </div>
                    <div>
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Enter job location"
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter job description"
                        />
                    </div>
                    <button type="submit">Create Job</button>
                </form>
            </div>
        </div>
    );
};

export default CreateJobForm;
