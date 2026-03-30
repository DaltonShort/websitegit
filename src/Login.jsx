import React, { useState } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from './firebase';


const ADMIN_EMAIL = "daltonshort2001@gmail.com";

function Login() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);


  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };


  if (user) {
    return (
      <div>
        <p>Welcome, {user.displayName}!</p>
        <p>Email: {user.email}</p>
        {isAdmin && <p style={{ color: 'green', fontWeight: 'bold' }}>Admin Access Granted</p>}
        {!isAdmin && <p style={{ color: 'red' }}>You are not an admin.</p>}
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
