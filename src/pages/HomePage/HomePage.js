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
			const foundPosts = await PostAPI.getAllPosts(PostFeed);
			console.log('These are the posts' + foundPosts);
			setPosts(foundPosts);
		}
		fetchPosts();
	}, []);

	return (
		<>
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

