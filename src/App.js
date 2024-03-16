import { useState } from 'react'; 
import AuthPage from '../src/pages/AuthPage/AuthPage'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { getUser } from '../src/utilities/users-service';
import { Routes, Route, Navigate } from 'react-router-dom';



 export default function App() {
    const [user, setUser] = useState(getUser());
    return (
        <>
        { user ?
            <>
              <Routes>
                <Route path="/profile" element={<ProfilePage user={user} setUser={setUser} />} />
                <Route path="/*" element={<Navigate to="/profile" />} />
    
              </Routes>
            </>
            :
            <AuthPage setUser={setUser} />
          }
        </>
  );
}


