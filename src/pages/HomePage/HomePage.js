import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import PostFeed from '../../components/PostFeed/PostFeed.js';
// import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar';
import styles from './HomePage.module.scss'


export default function HomePage({user, setUser}) {
	return (
		<>
			<NavBar user={user} setUser={setUser} />
			<SideBar user={user} setUser={setUser} />

			<div className="mainPage">
				<div>
					{/* <NewPost /> */}

					{/* <PostFeed /> */}
				</div>

			</div>
		</>
	);
}
