import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export const getAllJobs = () => {
  return sendRequest(BASE_URL);
};

export const getJobById = (id) => {
  return sendRequest(`${BASE_URL}/${id}`);
};

export const createJob = (jobData, method) => {
  console.log('Creating job with method:', method);
  return sendRequest(BASE_URL, method, {
    // method: String(method),
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

