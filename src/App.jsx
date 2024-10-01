import { Routes, Route } from 'react-router-dom';
import { LandingPage, LogIn, ResetPassword, SignUp, UserDetails } from './pages';
import { Navbar, NotFound } from './components/common';


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

        {/* Catch-all route for unknown paths */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
