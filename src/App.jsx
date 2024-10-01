import { Routes, Route } from 'react-router-dom';
import { FollowUpLanding, LandingPage, LogIn, ResetPassword, SignUp, UserDetails } from './pages';
import NotFound from './components/common/not-found';


function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/reset-your-password' element={<ResetPassword/>}/>
      <Route path='/profile' element={<UserDetails/>}/>
      <Route path='/follow-up' element={<FollowUpLanding/>}/>

      {/* Catch-all route for unknown paths */}
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
