import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './NewPost.module.scss';

export default function NewPostForm({}) {
	const [credentials, setNewData] = useState({
		title: '',
		description: ''
	});
	const [error, setError] = useState('');
	function handleChange(evt) {
		setNewData({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}
	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
		} catch {
			setError('Log In Failed - Try Again');
		}
	}
	return (
		<div>
			<div className="form-container">
				<form autoComplete="off" onSubmit={handleSubmit}>
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={credentials.title}
						onChange={handleChange}
						required
					/>
					<label>Description</label>
					<input
						type="text"
						name="description"
						value={credentials.description}
						onChange={handleChange}
						required
					/>
					<button type="submit">LOG IN</button>
				</form>
			</div>
			<p className="error-message">&nbsp;{error}</p>
		</div>
	);
}
