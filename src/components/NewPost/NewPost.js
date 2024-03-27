import { useState } from 'react';
import sendRequest from '../../utilities/send-request';
import styles from './NewPost.module.scss';

export default function NewPost(props) {
	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});
	const [showForm, setShowForm] = useState(false);
	function handleChange(evt) {
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	}

	// Toggle the form visibility when the button is clicked
	const handleButtonClick = () => {
		setShowForm(!showForm);
	};

	return (
		<>

			<button onClick={handleButtonClick}>Create a Post</button> {/* Button to toggle the form */}
			{showForm && ( // Render the form if showForm is true
				<div className={styles.container}>
					<form
						className={styles.form}
						onSubmit={(e) => {
							e.preventDefault();
							sendRequest('/api/posts', 'POST', formData).then(() => {
								props.fetchPosts();
							});
							setShowForm(false);
						}}
					>
						<div>
							<label>
								Title
								<input
									type="text"
									value={formData.title}
									name="title"
									onChange={handleChange}
									placeholder="Title"
								/>
							</label>
							<label>
								Description
								<input
									type="text"
									value={formData.description}
									name="description"
									onChange={handleChange}
									placeholder="Description"
								/>
							</label>
						</div>
						<button type="submit" value="submit">
							Submit
						</button>
					</form>
				</div>
			)}
		</>
	);
}