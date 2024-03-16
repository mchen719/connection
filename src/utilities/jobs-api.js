import sendRequest from './send-request';

const BASE_URL = '/api/jobs'; 
export function getAllJobs() {
  return sendRequest(BASE_URL);
}

export function getJobById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

