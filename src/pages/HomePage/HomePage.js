import { useState, useEffect } from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';

export default function HomePage( user, setUser ) {
	const [allPosts, setAllPosts] = useState([]);

	useEffect(() => {
		// Fetch all posts from the server
		fetch('/api/posts')
			.then(response => response.json())
			.then(data => setAllPosts(data))
			.catch(error => console.error(error));
	}, []);

	return (
		<>
			<h1>TEST HOMEPAGE TEXT </h1>
			<NavBar
				user={user}
				setUser={setUser}
			/>

			<div className="mainPage">
				<div>
					<NewPost>
						{showForm && (
							<form onSubmit={handleSubmit}>
								<input
									type="text"
									value={post}
									onChange={(e) => setPost(e.target.value)}
									placeholder="Enter your post"
								/>
								<button type="submit">Submit</button>
							</form>
						)}
						<button onClick={() => setShowForm(!showForm)}>New Post</button>
					</NewPost>

					<PostFeed posts={allPosts} />
				</div>

				<SideBar />
			</div>
		</>
	);
}