/**
 * Authentication utilities for localStorage management
 */

export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
}

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export const getUsers = (): User[] => {
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    return [];
  }
};

export const saveUser = (user: User): void => {
  try {
    const users = getUsers();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    throw new Error("Failed to save user");
  }
};

export const findUserByEmail = (email: string): User | undefined => {
  const users = getUsers();
  return users.find((u) => u.email === email);
};

export const findUserByUsername = (username: string): User | undefined => {
  const users = getUsers();
  return users.find((u) => u.username === username);
};

export const authenticateUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find((u) => u.email === email && u.password === password);
  return user || null;
};

export const setCurrentUser = (user: User): void => {
  try {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
  } catch (error) {
    throw new Error("Failed to set current user");
  }
};

export const getCurrentUser = (): User | null => {
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

export const logout = (): void => {
  try {
    localStorage.removeItem(CURRENT_USER_KEY);
  } catch (error) {
  }
};
