import sendrequest from "./send-request"
const BASE_URL = '/api/jobs'

export function getAllJobs() {
    return sendRequest(`${BASE_URL}/`, 'GET')
}
