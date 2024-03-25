import sendRequest from "./send-request"
const BASE_URL = '/api/users'

export function signUp(userData) {
    return sendRequest(BASE_URL, 'POST', userData)
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

// Below : for search bar needs

export function getAllUsers() {
    return sendRequest(`${BASE_URL}/`, 'GET')
}

export function getUserById(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'GET', id);
}

export function update(data, id) {
    return sendRequest(`${BASE_URL}/${id}`, 'PUT', data)
}