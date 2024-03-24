import styles from './PostFeed.module.scss';
import { useState, useEffect } from 'react';
export default function PostFeed({ user }) {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const res = await fetch('/api/posts/' + user._id);
			const data = await res.json();
			console.log(data);
			// setPosts(
			// 	data.sort((p1, p2) => {
			// 		return new Date(p2.createdAt) - new Date(p1.createdAt);
			// 	})
			// );
		};
		fetchPosts();
	}, []);

	return (
		<div>
			<h1>Post Feed</h1>
			{posts.map((post) => (
				<div key={post.id}>
					<h2>{post.title}</h2>
					<p>{post.description}</p>
				</div>
			))}
		</div>
	);
}
