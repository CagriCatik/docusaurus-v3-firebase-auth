// src/theme/Root.jsx
import React, { useState, useEffect } from 'react';
import { signInWithGoogle, auth } from './firebase';
import '../css/login.css';
import { FaGoogle } from 'react-icons/fa';

// Inline Loading component
const Loading = () => (
  <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem' }}>
    Loading...
  </div>
);

export default function Root({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Subscribe to Firebase auth state changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // While determining auth status, show a loading indicator
  if (authLoading) {
    return (
      <div className="loading-container">
        <Loading />
      </div>
    );
  }

  // If not authenticated, show a full-screen login page
  if (!user) {
    return (
      <div className="login-page">
        <div className="login-card">
          <h1>Sign In to Access the Site</h1>
          <p>Please sign in with Google to access the website content.</p>
          <button className="btn btn-google" onClick={signInWithGoogle}>
            <FaGoogle size={20} style={{ marginRight: '8px' }} />
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  // If authenticated, render only the site content without any navbar/header
  return <>{children}</>;
}
