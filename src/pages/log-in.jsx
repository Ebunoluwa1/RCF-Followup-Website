import {useEffect, useState} from 'react'
import { Link , useLocation, useNavigate} from 'react-router-dom'
import { rcfLogo } from '../assets'
import TextComponent from '../components/common/text';
import { ButtonLinks } from '../components/common';
import {  InputComponent, PasswordInput } from '../components/common/input';
import GoogleSignIn from './google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const LogIn = () => {
 const [nav, setNav] = useState('signIn');
 const navigate = useNavigate ();
 const location =useLocation();

useEffect (() => {
 if(location.pathname === '/sign-up'){
  setNav('signUp');
 } else if(location.pathname ==='/log-in'){setNav('signIn')}
},[location]
)

 const handleSignIn =()=>{
  setNav('signIn')
  navigate('/log-in')
  
 }

  const handleSignUp=()=>{
  setNav('signUp')
  navigate('/sign-up')
 }
  return (
    <div className='m-4'>
        <div className='flex flex-col items-center justify-center '>
            <div className="flex items-center my-4">
              <Link to="/" className="flex-shrink-0">
                <img src={rcfLogo} alt="RCF logo" width={40} height={40} />
              </Link>
            </div>
            <div>
              {/* handling the nav signin and signup */}
              <div className='flex flex-shrink-0 items-center '>
                 <p onClick={handleSignIn} 
                className={`sm:text-sm px-3 py-2  block cursor-pointer opacity-100  ${nav === 'signIn' && 'border-b-2 text-[#9741AC] opacity-100 outline-[#9741AC]-2 border-[#9741AC]'} `}>Sign in</p>

                  <p onClick={handleSignUp}   className={`sm:text-sm px-3 py-2  block opacity-100  ${nav === 'signUp' && 'border-b-2 text-[#9741AC] opacity-100 outline-[#9741AC]-2 border-[#9741AC]' } `}>Sign up</p>
              </div>
              
            </div>
                  
            {/* using Google */}
            {nav === 'signIn'|| handleSignIn ?
            (
              <div className='mt-4'>
                <TextComponent 
                className='mb-4 text-sm'
                text='Sign in to your account using :'
                />
              <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
              <GoogleSignIn />
              </GoogleOAuthProvider>
              </div>
            ):   (
              <div className='mt-4'>
                <TextComponent 
                className='mb-4 text-sm'
                text='Create a new account using :'
                />
              <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
                  <GoogleSignIn />
              </GoogleOAuthProvider>
              </div>
            ) }
         
            {/* form */}
            <div className=' flex flex-col
            justify-center'>
                <div className='pt-8 pb-4 px-8 '>
                  <InputComponent 
                  label='Email'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='email@gmail.com'
                
                  />
                </div>

                <div className=' mb-4'>
                  <PasswordInput
                  label='Password'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='*******'
              
                  />
                </div>

                <div className='w-full px-8 text-right pb-8'>
                   <Link to="/reset-your-password" className='text-[#953FAA] items-end font-semibold text-sm mt-4'>
                     Forgot Password ?
                   </Link>
                </div>
                 
               <div className='w-full px-8 flex justify-center'>
                 <ButtonLinks to='' size="md" color='primary' className='w-96' >
                  Sign in
                </ButtonLinks>
               </div>
                 
                  <div>
                    <div className='flex items-center justify-center space-x-1 px-8 '>
                      <TextComponent 
                       
                        text="Do not have an account?"
                        className='text-center mt-4 text-xs text-black'
                      />
                      <Link to='/sign-up' className='text-[#953FAA] hover:active:text-purple-800 items-end  text-sm mt-4 cursor-pointer'> Sign up</Link>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default LogIn