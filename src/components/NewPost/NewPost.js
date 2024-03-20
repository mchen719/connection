import { useState } from 'react';
import sendRequest from '../../utilities/send-request';
import styles from './NewPost.module.scss';

// export default function NewPostForm(props) {
// 	const [formData, setPostData] = useState({
// 		body: ''
// 	});
// 	const navigateTo = useNavigate();
// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const data = await props.createPost(formData, props.token);
// 			// cool thing to do once there is a showpage done
// 			navigateTo(`/post/${data._id}`);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	};
// 	function handleChange(evt) {
// 		setPostData({ ...credentials, [evt.target.name]: evt.target.value });
// 		setError('');
// 	}

//Make a fetch request to backend for post route.

export default function NewPost() {
	const [formData, setFormData] = useState({
		title: '',
		description: ''
	});
	function handleChange(evt) {
		setFormData({ ...formData, [evt.target.name]: evt.target.value });
	}

	// return (
	// 	<form onSubmit={handleSubmit}>
	// 		<h2>Create A New Twitter Post {props.user.name} </h2>
	// 		<input
	// 			placeholder="BODY"
	// 			type="text"
	// 			name="body"
	// 			value={formData.body}
	// 			onChange={handleChange}
	// 		/>
	// 		<input type="submit" value="Create Post" />
	// 	</form>
	// );
	return (
		<>
			<h2>Create a Post</h2>
			<div className={styles.container}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						sendRequest('/api/post', 'POST', formData);
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
					<button type="submit" value="submit" />
				</form>
			</div>
		</>
	);
}
