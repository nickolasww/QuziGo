import { useEffect } from "react";
import { getCurrentUser } from "@/features/auth/utils/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export const ProtectedRoute = ({ 
  children, 
  requireAuth = false,
  redirectTo = "/dashboard"
}: ProtectedRouteProps) => {
  const user = getCurrentUser();
  const isAuthenticated = !!user;

  useEffect(() => {
    if (requireAuth && !isAuthenticated) {
      // Redirect to login if auth required but not authenticated
      window.location.href = "/login";
    } else if (!requireAuth && isAuthenticated) {
      // Redirect to dashboard if on public page but already authenticated
      window.location.href = redirectTo;
    }
  }, [isAuthenticated, requireAuth, redirectTo]);

  // Show loading or nothing while redirecting
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  if (!requireAuth && isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};
