import { Routes, Route } from "react-router-dom";
import {
  ForgotPassword,
  LandingPage,
  LogIn,
  ResetPassword,
  Resources,
  SignUp,
  UserDashboard,
  UserDetails,
} from "./pages";
import { Footer, Navbar, NotFound } from "./components/common";
import CoursesPage from "./pages/courses";
import AttendancePage from "./pages/attendance";
import CourseDetail from "./components/courses/courseDetail";
import LessonDetail from "./components/courses/Lesson-detail";
import TakeTest from "./components/courses/take-test";
import TestResult from "./components/courses/test-result";
import ResultCorrections from "./components/courses/result-corrections";
import { AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";

function App() {
  return (
    <AuthProvider>
      <CourseProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-your-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<UserDetails />} />
         <Route path="/resources" element={<Resources />} />
        <Route path="/dashboard" element={<UserDashboard />} />
       
       
        {/* <Route path="/attendance" element={<AttendancePage />} />
         <Route path="/courses" element={<CoursesPage />} />
         <Route path="/take-course/:courseId" element={<CourseDetail />} />
        <Route path="/result-corrections" element={<ResultCorrections />} />
        <Route path="/take-lesson/:lessonId" element={<LessonDetail />} />
        <Route path="/take-test" element={<TakeTest />} />
        <Route path="/test-result" element={<TestResult />} /> */}

       
       {/* Wrap course-related pages in CourseProvider */}
        <Route
          path="/courses/*"
          element={
            <CourseProvider>
              <CoursesPage />
            </CourseProvider>
          }
        />
        <Route
          path="/attendance"
          element={
            <CourseProvider>
              <AttendancePage />
            </CourseProvider>
          }
        />
        <Route
          path="/take-course/:courseId"
          element={
            <CourseProvider>
              <CourseDetail />
            </CourseProvider>
          }
        />
        <Route
          path="/take-lesson/:lessonId"
          element={
            <CourseProvider>
              <LessonDetail />
            </CourseProvider>
          }
        />
        <Route
          path="/take-test"
          element={
            <CourseProvider>
              <TakeTest />
            </CourseProvider>
          }
        />
        <Route
          path="/test-result"
          element={
            <CourseProvider>
              <TestResult />
            </CourseProvider>
          }
        />
        <Route
          path="/result-corrections"
          element={
            <CourseProvider>
              <ResultCorrections />
            </CourseProvider>
          }
        />

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </CourseProvider>
    </AuthProvider>
  );
}

export default App;
