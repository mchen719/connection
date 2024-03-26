import sendRequest from './send-request';

const BASE_URL = '/api/posts';

export const getAllPosts = () => {
	console.log('smile the api works');
	return sendRequest(BASE_URL);
};

export const getPostById = (id) => {
	return sendRequest(`${BASE_URL}/${id}`);
};

export const createPost = (postData, method) => {
	console.log('Creating post with method:', method);
	return sendRequest(BASE_URL, method, {
		// method: String(method),
		body: JSON.stringify(postData),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const updatePost = (id, postData) => {
	return sendRequest(`${BASE_URL}/${id}`, {
		method: 'PUT',
		body: JSON.stringify(postData),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const deletePost = (id) => {
	return sendRequest(`${BASE_URL}/${id}`, {
		method: 'DELETE'
	});
};
