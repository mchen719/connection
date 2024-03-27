import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';
import styles from './HomePage.module.scss';
import * as PostAPI from '../../utilities/post-api';

export default function HomePage({user, setUser}) {
	const [posts, setPosts] = useState([]);

	async function fetchPosts() {
		const foundPosts = await PostAPI.getAllPosts(PostFeed);
		console.log('These are the posts' + foundPosts);
		setPosts(foundPosts);
	}
	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<>
			<div className={styles.HomePage}>
				<NavBar user={user} setUser={setUser} />
				<div className="mainPage">
					<div>
						<div className={styles.SideBar}>
							<SideBar user={user} setUser={setUser} />
						</div>
						<NewPost fetchPosts= {fetchPosts}/>
						<div className={styles.PostFeed}>
							<PostFeed user={user} posts={posts} />
						</div>
						
					</div>
				</div>
			</div>
		</>
	);
}
