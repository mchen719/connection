// import sendRequest from './send-request';

// const BASE_URL = '/api/jobs'; 
// export function getAllJobs() {
//   return sendRequest(BASE_URL);
// }

// export function getJobById(id) {
//   return sendRequest(`${BASE_URL}/${id}`);
// }

import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export const getAllJobs = () => {
  return sendRequest(BASE_URL);
};

export const getJobById = (id) => {
  return sendRequest(`${BASE_URL}/${id}`);
};

export const createJob = (jobData) => {
  return sendRequest(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(jobData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateJob = (id, jobData) => {
  return sendRequest(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(jobData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteJob = (id) => {
  return sendRequest(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
};
