import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';

export default function HomePage(user, setUser) {
	return (
		<>
			<h1>TEST HOMEPAGE TEXT </h1>
			<NavBar user={user} setUser={setUser} />

			<div className="mainPage">
				<div>
					{/* <NewPost /> */}

					<PostFeed />
				</div>

				<SideBar />
			</div>
		</>
	);
}
