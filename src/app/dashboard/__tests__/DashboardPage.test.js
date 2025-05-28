import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DashboardPage from '../page'; // Adjust path as necessary
import { useAuth } from '../../../contexts/AuthContext'; // Adjust path
import { useRouter } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock AuthContext
jest.mock('../../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

describe('DashboardPage', () => {
  let mockPush;

  beforeEach(() => {
    mockPush = jest.fn();
    useRouter.mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('displays loading message initially then redirects if not logged in', async () => {
    useAuth.mockReturnValue({
      isLoggedIn: false,
      user: null,
    });

    render(<DashboardPage />);
    
    // Check for loading state first (it might be too fast to catch reliably without specific component changes)
    // For now, we'll focus on the redirect which is the more critical part.
    // The component has a setTimeout of 100ms before redirecting.

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/auth?redirect=/dashboard');
    }, { timeout: 500 }); // Timeout should be greater than the setTimeout in component
  });

  test('displays loading message and then dashboard content if logged in', async () => {
    useAuth.mockReturnValue({
      isLoggedIn: true,
      user: { name: 'Test User' },
    });

    render(<DashboardPage />);

    // Initially, it might show loading (due to the 100ms delay in component)
    // We wait for the actual content to appear.
    expect(await screen.findByText('Mon Tableau de Bord')).toBeInTheDocument();
    expect(screen.getByText(/Bienvenue, Test User!/i)).toBeInTheDocument();
    expect(screen.getByText('Aperçu des stocks')).toBeInTheDocument();
    expect(screen.getByText('Ventes Récentes')).toBeInTheDocument();
    expect(screen.getByText('Actions Rapides')).toBeInTheDocument();
    expect(mockPush).not.toHaveBeenCalled(); // Should not redirect
  });

  test('displays generic welcome message if user name is not available but logged in', async () => {
    useAuth.mockReturnValue({
      isLoggedIn: true,
      user: null, // User object exists but no name
    });

    render(<DashboardPage />);
    
    expect(await screen.findByText('Mon Tableau de Bord')).toBeInTheDocument();
    expect(screen.getByText(/Bienvenue, Utilisateur!/i)).toBeInTheDocument(); // Default name
    expect(mockPush).not.toHaveBeenCalled();
  });
  
  test('shows loading state initially', () => {
    useAuth.mockReturnValue({ isLoggedIn: false, user: null }); // Or true, the loading state is pre-check
    render(<DashboardPage />);
    expect(screen.getByText(/Chargement.../i)).toBeInTheDocument();
    expect(screen.getByText(/Vérification de l'authentification./i)).toBeInTheDocument();
  });

});
