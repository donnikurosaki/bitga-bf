import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'; // Added within
import { act } from 'react'; // Import act for fireEvent involving state updates
import Navbar from '../Navbar'; // Adjust path as necessary
import { useAuth } from '../../contexts/AuthContext'; // Adjust path
import { useRouter } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  // usePathname: jest.fn().mockReturnValue('/'), // Mock if Navbar uses it
}));

// Mock AuthContext
jest.mock('../../contexts/AuthContext', () => ({ // Adjusted path
  useAuth: jest.fn(),
}));

describe('Navbar', () => {
  let mockPush;
  let mockLogout;

  // --- Helper function to render Navbar with specific auth state ---
  const renderNavbar = (authValue) => {
    useAuth.mockReturnValue(authValue);
    render(<Navbar />);
  };

  beforeEach(() => {
    mockPush = jest.fn();
    mockLogout = jest.fn();
    useRouter.mockReturnValue({
      push: mockPush,
    });
    // Default to logged out state for useAuth, can be overridden in tests
    useAuth.mockReturnValue({
      isLoggedIn: false,
      user: null,
      logout: mockLogout,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Logged Out State', () => {
    beforeEach(() => {
      renderNavbar({ isLoggedIn: false, user: null, logout: mockLogout });
    });

    test('renders "Se connecter" and "S\'inscrire" buttons', () => {
      expect(screen.getByRole('button', { name: /se connecter/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /s'inscrire/i })).toBeInTheDocument();
    });

    test('does NOT render "Dashboard" link or "Se déconnecter" button', () => {
      expect(screen.queryByRole('link', { name: /dashboard/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /se déconnecter/i })).not.toBeInTheDocument();
    });

    test('"Se connecter" button links to /auth', () => {
      const loginButton = screen.getByRole('button', { name: /se connecter/i });
      // The button is wrapped by a Link, check the href of the parent Link
      expect(loginButton.closest('a')).toHaveAttribute('href', '/auth');
    });

    test('"S\'inscrire" button links to /auth?tab=signup', () => {
      const signupButton = screen.getByRole('button', { name: /s'inscrire/i });
      expect(signupButton.closest('a')).toHaveAttribute('href', '/auth?tab=signup');
    });
  });

  describe('Logged In State', () => {
    beforeEach(() => {
      renderNavbar({ isLoggedIn: true, user: { name: 'Test User' }, logout: mockLogout });
    });

    test('renders "Dashboard" link and "Se déconnecter" button', () => {
      expect(screen.getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /se déconnecter/i })).toBeInTheDocument();
    });

    test('does NOT render "Se connecter" or "S\'inscrire" buttons', () => {
      expect(screen.queryByRole('button', { name: /se connecter/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /s'inscrire/i })).not.toBeInTheDocument();
    });

    test('"Dashboard" link points to /dashboard', () => {
      expect(screen.getByRole('link', { name: /dashboard/i })).toHaveAttribute('href', '/dashboard');
    });

    test('clicking "Se déconnecter" calls logout and redirects to home', async () => {
      const logoutButton = screen.getByRole('button', { name: /se déconnecter/i });
      await act(async () => {
        fireEvent.click(logoutButton);
      });
      expect(mockLogout).toHaveBeenCalledTimes(1);
      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });

  describe('Mobile Menu', () => {
    test('toggles mobile menu visibility on button click', async () => {
      renderNavbar({ isLoggedIn: false, user: null, logout: mockLogout });
      let mobileMenuButton = screen.getByRole('button', { name: "Open menu" });

      // Open menu
      await act(async () => {
        fireEvent.click(mobileMenuButton);
      });
      // After click, menu should be open, and button name should change
      mobileMenuButton = screen.getByRole('button', { name: "Close menu" });
      expect(mobileMenuButton).toBeInTheDocument();
      // Check for a known link that's part of the mobile nav structure
      const mobileNavContainer = document.querySelector('.md\\:hidden.py-4.animate-slide-down');
      expect(mobileNavContainer).toBeVisible();


      // Close menu
      await act(async () => {
        fireEvent.click(mobileMenuButton);
      });
      mobileMenuButton = screen.getByRole('button', { name: "Open menu" });
      expect(mobileMenuButton).toBeInTheDocument();
       await waitFor(() => {
        // After closing, the specific container for mobile nav should not be in the document
        // if it's conditionally rendered (which it is: {isMobileMenuOpen && (...)})
         expect(document.querySelector('.md\\:hidden.py-4.animate-slide-down')).not.toBeInTheDocument();
       });
    });

    test('mobile menu shows correct auth links when logged out', async () => {
      renderNavbar({ isLoggedIn: false, user: null, logout: mockLogout });
      const mobileMenuButton = screen.getByRole('button', { name: "Open menu" });
      await act(async () => {
        fireEvent.click(mobileMenuButton);
      });
      
      const mobileNav = document.querySelector('.md\\:hidden.py-4.animate-slide-down nav');
      expect(mobileNav).toBeInTheDocument(); // Ensure mobile nav is open
      expect(within(mobileNav).getByRole('button', { name: /se connecter/i })).toBeInTheDocument();
      expect(within(mobileNav).getByRole('button', { name: /s'inscrire/i })).toBeInTheDocument();
      expect(within(mobileNav).queryByRole('link', { name: /dashboard/i })).not.toBeInTheDocument();
      expect(within(mobileNav).queryByRole('button', { name: /se déconnecter/i })).not.toBeInTheDocument();
    });

    test('mobile menu shows correct auth links when logged in', async () => {
      renderNavbar({ isLoggedIn: true, user: { name: 'Test User' }, logout: mockLogout });
      const mobileMenuButton = screen.getByRole('button', { name: "Open menu" });
      await act(async () => {
        fireEvent.click(mobileMenuButton);
      });

      const mobileNav = document.querySelector('.md\\:hidden.py-4.animate-slide-down nav');
      expect(mobileNav).toBeInTheDocument();
      expect(within(mobileNav).getByRole('link', { name: /dashboard/i })).toBeInTheDocument();
      expect(within(mobileNav).getByRole('button', { name: /se déconnecter/i })).toBeInTheDocument();
      expect(within(mobileNav).queryByRole('button', { name: /se connecter/i })).not.toBeInTheDocument();
      expect(within(mobileNav).queryByRole('button', { name: /s'inscrire/i })).not.toBeInTheDocument();
    });

    test('clicking a nav link in mobile menu closes it', async () => {
        renderNavbar({ isLoggedIn: false, user: null, logout: mockLogout });
        let mobileMenuButton = screen.getByRole('button', { name: "Open menu" });
        
        // Open menu
        await act(async () => {
          fireEvent.click(mobileMenuButton);
        });
        
        // Ensure menu is open and link is visible
        mobileMenuButton = screen.getByRole('button', { name: "Close menu" }); // Button label changed
        const mobileNav = document.querySelector('.md\\:hidden.py-4.animate-slide-down nav');
        const featuresLinkInMobileMenu = within(mobileNav).getByText(/fonctionnalités/i);
        expect(featuresLinkInMobileMenu).toBeVisible();
  
        // Click a link within the mobile menu
        await act(async () => {
            fireEvent.click(featuresLinkInMobileMenu);
        });
  
        // Menu should be closed
        mobileMenuButton = screen.getByRole('button', { name: "Open menu" }); // Button label should revert
        expect(mobileMenuButton).toBeInTheDocument();
        await waitFor(() => {
            // The mobile navigation container should not be in the document if it's conditionally rendered
            expect(document.querySelector('.md\\:hidden.py-4.animate-slide-down')).not.toBeInTheDocument();
        });
      });
  });
});
