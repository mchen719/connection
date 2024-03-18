import styles from './NewPost.module.scss';

export default function NewPost({}) {
	return (
		<div>
			<h1>New Posts</h1>
		</div>
	);
}


/*
testing to see try to get form to 

import React, { useState } from 'react';
import styles from './NewPost.module.scss';

export default function NewPost({ addPost }) {
	const [post, setPost] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addPost(post);
		setPost('');
	};

	return (
		<div>
			<h1>New Post</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={post}
					onChange={(e) => setPost(e.target.value)}
					placeholder="Enter your post"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}


*/