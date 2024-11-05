"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { fetchUser } from "@/services/modules/auth/user.service";

// Define the context interface
interface AuthContextType {
  user: User;
  loadingUser: boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

interface User {
    badge: number;
    email: string;
    first_name: string;
    id: number;
    phone: string;
    role: number;
    status: number;
    subscription_type: number;
    trading_account: string;
    xp: number;
}
// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define the AuthProvider props
interface AuthProviderProps {
  children: ReactNode;
}

// Implement the AuthProvider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, loadingUser } = useAppSelector((state) => state.FetchUser);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token && !user) {
      dispatch(fetchUser());
    } 
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  const value: AuthContextType = {
    user,
    loadingUser,
    logout,
    isAuthenticated: !!user && !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for using AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};