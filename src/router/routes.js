import HomePage from '../pages/HomePage/HomePage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import JobPage from '../pages/JobPage/JobPage'
import ShowUserPage from '../pages/ShowUserPage/ShowUserPage'

// MUST INCLUDE THE VIEW PROFILE PATH HERE!!!!!!!

// MUST INCLUDE THE VIEW PROFILE PATH HERE!!!!!!!

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
	},
	{
		Component: ShowUserPage,
		key: 'ShowUserPage',
		path: '/profile/:userId'
	}

];

export default routes;
