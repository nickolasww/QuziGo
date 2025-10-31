import { useState, useEffect } from "react";
import { getCurrentUser, logout } from "@/features/auth/utils/auth";

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setUser(null);
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return {
    user,
    isAuthenticated,
    handleLogout,
  };
};
