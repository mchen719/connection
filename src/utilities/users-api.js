import sendrequest from "./send-request"
const BASE_URL = '/api/users'

export function signUp(userData) {
    return sendrequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendrequest(`${BASE_URL}/login`, 'POST', credentials)
}
