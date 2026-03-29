import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * A wrapper component that protects a route by redirecting 
 * unauthenticated users to the login page.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { status } = useAuth();
  const location = useLocation();

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    // Redirect to login but save current location to return after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
