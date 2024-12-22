import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const api_base_uri = "https://rcfbackend.onrender.com";

// Create the CourseContext
const CourseContext = createContext();

// Create a provider component
export const CourseProvider = ({ children }) => {
  const [courseCategories, setCourseCategories] = useState([]);
  const [courses, setCourses] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch course categories
  const fetchCourseCategories = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${api_base_uri}/course-categories/`);
      setCourseCategories(response.data.data.course_categories);
    } catch (error) {
      setError('Failed to fetch course categories.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch courses
  const fetchCourses = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${api_base_uri}/courses/`);
      setCourses(response.data.data.courses);
    } catch (error) {
      setError('Failed to fetch courses.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch lessons for a specific course
  const fetchLessons = useCallback(async (courseId) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${api_base_uri}/courses/lessons`, {
        params: { course_id: courseId },
      });
      setLessons(response.data.data.lessons);
    } catch (error) {
      setError('Failed to fetch lessons.');
    } finally {
      setLoading(false);
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
        loading,
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
