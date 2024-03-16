import HomePage from '../pages/HomePage/HomePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import JobPage from '../pages/JobPage/JobPage'

const routes = [
	{
		Component: HomePage,
		key: 'Home',
		path: '/home'
	},
	{
		Component: ProfilePage,
		key: 'ProfilePage',
		path: '/profile'
	},
	{
		Component: JobPage,
		key: 'JobPage',
		path: '/jobs'
	}
];

export default routes;
