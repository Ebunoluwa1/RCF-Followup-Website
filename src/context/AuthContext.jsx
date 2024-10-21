// AuthContext.js
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const api_base_uri = "https://rcfbackend.onrender.com";

// Create the AuthContext
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Function to check if user is authenticated
  const checkAuth = useCallback(() => {
    const token = Cookies.get('auth_token');
    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }
    // Verify the token and fetch user details
    verifyTokenAndFetchUser(token);
  }, []);

  // Verify the token and fetch user details
  const verifyTokenAndFetchUser = async (token) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      const response = await axios.get(`${api_base_uri}/user/user-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User details: ", response.data.user);
      setUser(response.data.user);
      setSuccess('User authenticated successfully.');
    } catch (error) {
      setError('Failed to verify token or fetch user details.');
      Cookies.remove('auth_token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Register a new user
  const register = async (email, password, firstname, lastname) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      const response = await axios.post(`${api_base_uri}/auth/register`, {
        email,
        password,
        firstname,
        lastname,
      });
      // Set the token and fetch user details
      Cookies.set('auth_token', response.data.token, { expires: 7 });
      await verifyTokenAndFetchUser(response.data.token);
      setSuccess('Registration successful.');
    } catch (error) {
      setError('Registration failed. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Login an existing user
  const login = async (email, password) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      const response = await axios.post(`${api_base_uri}/auth/login`, {
        email,
        password,
      });
      // Set the token and fetch user details
      Cookies.set('auth_token', response.data.data.token, { expires: 7 });
      await verifyTokenAndFetchUser(response.data.data.token);
      setSuccess('Login successful.');
    } catch (error) {
      setError('Login failed. Please check your email and password.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout the user
  const logout = () => {
    Cookies.remove('auth_token');
    setUser(null);
    setSuccess('Logged out successfully.');
    setError(null);
  };

  // Forgot password functionality
  const forgotPassword = async (email) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await axios.post(`${api_base_uri}/auth/forgot-password`, { email });
      setSuccess('Password reset email sent successfully.');
    } catch (error) {
      setError('Failed to send password reset email. Please try again.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Reset password functionality
  const resetPassword = async (password, token) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);
      await axios.post(`${api_base_uri}/auth/reset-password`, {
        password,
        token,
      });
      setSuccess('Password reset successful. You can now log in with the new password.');
    } catch (error) {
      setError('Password reset failed. The token may be invalid or expired.');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Clear error and success states manually
  const clearMessages = () => {
    setError(null);
    setSuccess(null);
  };

  // Check authentication state on component mount
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        success,
        register,
        login,
        logout,
        forgotPassword,
        resetPassword,
        clearMessages,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
