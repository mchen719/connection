import NavBar from '../../components/NavBar/NavBar.js';
import PostFeed from '../../components/PostFeed/PostFeed.js';
import NewPost from '../../components/NewPost/NewPost.js';
import SideBar from '../../components/SideBar/SideBar.js';
import Logo from '../../components/Logo/Logo.js';

export default function HomePage({}) {
	return (
		<>
            <Logo />
			<NavBar />

			<div className="mainPage">
				<div>
					<NewPost />
                        
					<PostFeed />
				</div>

				<SideBar />
			</div>
		</>
	);
}

