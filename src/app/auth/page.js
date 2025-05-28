'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter, useSearchParams } from 'next/navigation'; // Import useSearchParams

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const { login, signup, isLoggedIn, user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams(); // Use the hook

  // Form states
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
  
  // Error states
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (isLoggedIn && router) { 
      const redirectUrl = searchParams.get('redirect') || '/dashboard'; // Use searchParams hook
      router.push(redirectUrl);
    }
  }, [isLoggedIn, router, searchParams]); // Added searchParams to dependency array
  
  // Determine initial tab from URL query parameter
  useEffect(() => {
    const tab = searchParams.get('tab'); // Use searchParams hook
    if (tab === 'signup') {
      setActiveTab('signup');
    } else {
      setActiveTab('login');
    }
  }, [searchParams]); // Added searchParams to dependency array


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      await login(loginEmail, loginPassword);
      // Redirect is handled by useEffect checking isLoggedIn
    } catch (error) {
      setLoginError(error.message || 'Échec de la connexion.');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupError('');
    if (signupPassword !== signupConfirmPassword) {
      setSignupError("Les mots de passe ne correspondent pas.");
      return;
    }
    try {
      // You might want to collect a name or other details for signup
      await signup(signupEmail, signupPassword, 'Utilisateur Test'); 
      // Redirect is handled by useEffect checking isLoggedIn
    } catch (error) {
      setSignupError(error.message || "Échec de l'inscription.");
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900 py-12 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
      data-testid={`auth-page-active-tab-${activeTab}`} // For debugging activeTab state in tests
    >
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            className={`w-1/2 py-3 px-4 text-sm font-medium text-center focus:outline-none transition-colors duration-150 ${
              activeTab === 'login'
                ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
            onClick={() => { setActiveTab('login'); setLoginError(''); setSignupError(''); }}
          >
            Se connecter
          </button>
          <button
            className={`w-1/2 py-3 px-4 text-sm font-medium text-center focus:outline-none transition-colors duration-150 ${
              activeTab === 'signup'
                ? 'border-b-2 border-primary-500 text-primary-600 dark:text-primary-400 dark:border-primary-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
            onClick={() => { setActiveTab('signup'); setLoginError(''); setSignupError(''); }}
          >
            S'inscrire
          </button>
        </div>

        {activeTab === 'login' && (
          <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            {loginError && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-md text-sm">
                {loginError}
              </div>
            )}
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Adresse e-mail
              </label>
              <div className="mt-1">
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-primary-500 transition-colors"
              >
                Se connecter
              </button>
            </div>
          </form>
        )}

        {activeTab === 'signup' && (
          <form className="mt-8 space-y-6" onSubmit={handleSignupSubmit}>
            {signupError && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-md text-sm">
                {signupError}
              </div>
            )}
            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Adresse e-mail
              </label>
              <div className="mt-1">
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="signup-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Confirmez le mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="signup-confirm-password"
                  name="confirm-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={signupConfirmPassword}
                  onChange={(e) => setSignupConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:ring-offset-gray-800 focus:ring-primary-500 transition-colors"
              >
                S'inscrire
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
