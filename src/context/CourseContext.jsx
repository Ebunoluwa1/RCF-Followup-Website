import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const api_base_uri = "https://rcfbackend.onrender.com";

// Create the CourseContext
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [courseCategories, setCourseCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loadingState, setLoadingState] = useState({
    categories: false,
    courses: false,
    lessons: false,
  });
  const [error, setError] = useState(null);

  // Fetch course categories
  const fetchCourseCategories = useCallback(async () => {
    try {
      setLoadingState(prevState => ({ ...prevState, categories: true }));
      setError(null);
       const token = Cookies.get("auth_token");
         console.log(localStorage.getItem("authToken"));
       console.log(token);
      //  const token = localStorage.getItem("authToken"); // Example: Token stored after login
        if (!token) {
      throw new Error("No token found. Please log in.");
    }
      //  console.log(localStorage.getItem("authToken"));
      console.log(Cookies.get("auth_token"))
       console.log(token);
      const response = await axios.get(`${api_base_uri}/course-categories/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourseCategories(response.data.data.course_categories);
    } catch (error) {
      setError('Failed to fetch course categories.');
    } finally {
      setLoadingState(prevState => ({ ...prevState, categories: false }));
    }
  }, []);

  // Fetch courses
  const fetchCourses = useCallback(async () => {
    try {
      setLoadingState(prevState => ({ ...prevState, courses: true }));
      setError(null);
        const token = Cookies.get("auth_token");
         console.log(localStorage.getItem("authToken"));
       console.log(token);
      //  const token = localStorage.getItem("authToken"); // Example: Token stored after login
        if (!token) {
      throw new Error("No token found. Please log in.");
    }
      const response = await axios.get(`${api_base_uri}/courses/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourses(response.data.data.courses);
    } catch (error) {
      setError('Failed to fetch courses.');
    } finally {
      setLoadingState(prevState => ({ ...prevState, courses: false }));
    }
  }, []);

  // Fetch lessons for a specific course
  const fetchLessons = useCallback(async (courseId) => {
    try {
      setLoadingState(prevState => ({ ...prevState, lessons: true }));
      setError(null);
         const token = Cookies.get("auth_token");
    if (!token) {
      throw new Error("No token found. Please log in.");
     
    }
      const response = await axios.get(`${api_base_uri}/courses/lessons`, {
         
      headers: {
        Authorization: `Bearer ${token}`,
      },
         
        params: { course_id: courseId },
      });
      setLessons(response.data.data.lessons);
    } catch (error) {
      // setError('Failed to fetch lessons.'); 
      console.error(error); 
      setError(error) // Log the actual error for debugging
       setError(error.response ? error.response.data.message : 'Kindly sign in to have access to the courses');
    } finally {
      setLoadingState(prevState => ({ ...prevState, lessons: false }));
    }
  }, []);

  // Clear error state manually
  const clearError = () => {
    setError(null);
  };

  // Use effects to fetch initial data if necessary
  useEffect(() => {
    fetchCourseCategories();
    fetchCourses();
  }, [fetchCourseCategories, fetchCourses]);

  return (
    <CourseContext.Provider
      value={{
        courseCategories,
        courses,
        lessons,
        loadingState,
        error,
        fetchCourseCategories,
        fetchCourses,
        fetchLessons,
        clearError,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

// Create a custom hook to use the CourseContext
export const useCourse = () => {
  return useContext(CourseContext);
};
