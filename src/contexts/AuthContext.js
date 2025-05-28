'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // For redirects after logout

// 1. Create the Authentication Context
const AuthContext = createContext(null);

// Dummy user credentials for mock login
const DUMMY_USER = { email: 'user@example.com', name: 'Test User', id: '123' };
const DUMMY_PASSWORD = 'password';

// 2. Create the AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // Optional: Persist login state (very basic example)
  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  const login = async (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => { // Simulate API call
        if (email === DUMMY_USER.email && password === DUMMY_PASSWORD) {
          setUser(DUMMY_USER);
          setIsLoggedIn(true);
          localStorage.setItem('authUser', JSON.stringify(DUMMY_USER));
          resolve({ success: true, user: DUMMY_USER });
        } else {
          reject({ success: false, message: 'Invalid email or password.' });
        }
      }, 500);
    });
  };

  const signup = async (email, password, name = 'New User') => {
    return new Promise((resolve) => {
      setTimeout(() => { // Simulate API call
        console.log('Mock Signup:', { email, password, name });
        const newUser = { email, name, id: Date.now().toString() };
        setUser(newUser);
        setIsLoggedIn(true);
        localStorage.setItem('authUser', JSON.stringify(newUser));
        resolve({ success: true, user: newUser });
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('authUser');
    // Redirect to home or login page after logout
    // router.push('/'); // Or '/auth'
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined || context === null) { // Check for null as well because initial value is null
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
