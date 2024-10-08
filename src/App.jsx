import { Routes, Route } from 'react-router-dom';
import { LandingPage, LogIn, ResetPassword, Resources, SignUp, UserDashboard, UserDetails } from './pages';
import { Footer, Navbar, NotFound } from './components/common';
import CoursesPage from './pages/courses';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/log-in' element={<LogIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/reset-your-password' element={<ResetPassword/>}/>
        <Route path='/profile' element={<UserDetails/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/dashboard' element={<UserDashboard/>}/>

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
