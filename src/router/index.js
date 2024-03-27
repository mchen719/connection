import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import { useState } from 'react'
import styles from './AppRouter.module.scss';
import { getUser } from '../utilities/users-service';
import AuthPage from '../pages/AuthPage/AuthPage';
// import ProfilePage from '../pages/ProfilePage/ProfilePage'
// import HomePage from '../pages/HomePage/HomePage'
// import JobPage from '../pages/JobPage/JobPage'

// MAJOR NOTE :  MUST RE INTRODUCE FUNCTIONING TERNARY EXPRESSION. is user logged in? Give them profile. if not?? go kick rocks.

const AppRouter = () => {
	const [user, setUser] = useState(getUser())
	return (
		<Router>
			<main className={styles.App}>

			<>
			{user ?

			<Routes>
				{routes.map(({ Component, key, path }) => (
					<Route
						key={key}
						path={path}
						element={
						<Component
							page={key}
							user={user}
							setUser={setUser}

						/>
						}
					></Route>
				))}
				<Route path='/*' element={<Navigate to="/home"/>}/>
			</Routes>
				:
				<AuthPage setUser={setUser}/>
				}
			</>


			</main>
		</Router>
	);
};

export default AppRouter;

