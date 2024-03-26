import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';
import styles from './HomePage.module.scss';
import * as PostAPI from '../../utilities/post-api.js';

export default function HomePage(user, setUser) {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function fetchPosts() {
			const foundPosts = await PostAPI.getAllPosts();
			console.log('These are the posts' + foundPosts);
			setPosts(foundPosts);
		}
		fetchPosts();
	}, []);

	return (
		<>
			<h1>TEST HOMEPAGE TEXT </h1>
			<NavBar user={user} setUser={setUser} />

			<div className="mainPage">
				<div>
					<NewPost />

					<PostFeed user={user} posts={posts} />
				</div>

				<SideBar user={user} setUser={setUser} />
			</div>
		</>
	);
}
// useEffect(() => {
// 	const fetchPosts = async () => {
// 		const res = await fetch('/api/posts/' + user._id);
// 		const data = await res.json();
// 		console.log(data);
// 		// setPosts(
// 		// 	data.sort((p1, p2) => {
// 		// 		return new Date(p2.createdAt) - new Date(p1.createdAt);
// 		// 	})
// 		// );
// 	};
// 	fetchPosts();
// }, []);
