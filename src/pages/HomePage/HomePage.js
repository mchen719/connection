import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';
import styles from './HomePage.module.scss';
import * as PostAPI from '../../utilities/post-api';

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
<<<<<<< HEAD
			<div className={styles.HomePage}>
				<h1>TEST HOMEPAGE TEXT </h1>
				<NavBar user={user} setUser={setUser} />

				<div className="mainPage">
					<div>
						<NewPost />
=======
			<NavBar user={user} setUser={setUser} />
			<div className="mainPage">
				<div>
					<NewPost />
>>>>>>> 8ba03b9907f4c735d00ac1afe3faf3ae147d3feb

						<PostFeed user={user} posts={posts} />
					</div>

					<SideBar user={user} setUser={setUser} />
				</div>
<<<<<<< HEAD
=======
				<SideBar user={user} setUser={setUser} />

>>>>>>> 8ba03b9907f4c735d00ac1afe3faf3ae147d3feb
			</div>
		</>
	);
}

