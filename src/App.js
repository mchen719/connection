import { useState } from 'react'; 
import Login from '../src/components/Login/Login';
import SignUp from '../src/components/SignUp/SignUp';


 export default function App({ setUser }) {
    const [showLogin, setShowLogin] = useState();
    return (

    <>
      <>
        <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'SIGN UP' : 'LOG IN'}</button>
      </>
      {showLogin ? <Login setUser={setUser} /> : <SignUp setUser={setUser} />}
    </>
  );
}


