/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { rcfLogo } from "../assets";
import TextComponent from "../components/common/text";
import { ButtonLinks } from "../components/common";
import { InputComponent, PasswordInput } from "../components/common/input";
import GoogleSignIn from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios";

const SignUp = () => {
  const [nav, setNav] = useState("signIn");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [register, setRegister]= useState(false)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/sign-up") {
      setNav("signUp");
    } else if (location.pathname === "/log-in") {
      setNav("signIn");
    }
  }, [location]);

  // to navigate between the signin and sign up page
  const handleSignIn = () => {
    setNav("signIn");
    navigate("/log-in");
  };

  const handleSignUp = () => {
    setNav("signUp");
    navigate("/sign-up");
  };
  
// To handle submitting the form
 const handleSubmit = (e) => {
  e.preventDefault(); //this prevents the form from refreshing the page

//  to check if passwords match
if(password !== confirmPassword) {
 setError('Passwords do not match!')
  return;
} 

setLoading(true); //this starts loading when request is initiated

// set axios configurations
const configurations ={
method: 'POST',  // adds new data saved to a URL resource on a server
url: 'https://rcfbackend.onrender.com/auth/register',
  data: {
    firstname,
    lastname,
        email,
        password,
      },

}
// make API call
axios(configurations)
.then((response)=> {
  // handle register successfully
  setRegister('Sign up successfull!')
  
  // stores the token in local storage
 const token = response.data.token
 
 if(token){
  localStorage.setItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MTNjMzlkM2QwZjRjNzQ5YTAwZDcyYSIsImlhdCI6MTcyOTM0ODUxMCwiZXhwIjoxNzI5MzUyMTEwfQ.qegRwOqmnhtxayQaKAo4Acz_SxiRgBjFgsdD8m1DUnM', token)
 }
// to delay the transition by 2 seconds to show success messsage
 setTimeout ( () => {
   //to redirect to the user detail after 2 sec
      navigate('/profile')
      },2000)
})

 //handle error

.catch((error) => {
  console.error("Error response:", error.response); //log error response
if(error.response) {
  setError(error.response.data.error || 'Signup failed');
      } else{
        setError('Network error occurred')
      }
      setRegister(null)
})

.finally (() => {
    setLoading(false)
  })
  // setLoading(false); //this stops loading when request has ended

 }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center">
          <Link to="/" className="flex-shrink-0 mb-6">
            <img src={rcfLogo} alt="RCF logo" className="w-12 h-12" />
          </Link>
          
          <div className="w-full mb-6">
            <div className="flex justify-center border-b border-gray-200">
              <button
                onClick={handleSignIn}
                className={`px-4 py-2 text-sm font-medium ${
                  nav === "signIn"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign in
              </button>
              <button
                onClick={handleSignUp}
                className={`px-4 py-2 text-sm font-medium ${
                  nav === "signUp"
                    ? "text-purple-600 border-b-2 border-purple-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="w-full mb-6 flex flex-col items-center justify-center">
            <TextComponent
              className="mb-4 text-sm text-center"
              text={`${
                nav === "signUp" ? "Create a new account" : "Sign in to your account"
              } using:`}
            />
            <GoogleOAuthProvider clientId="YOUR_CLIENT_ID">
              <GoogleSignIn />
            </GoogleOAuthProvider>
          </div>
              {/* create form */}
          <form className="w-full space-y-6" onSubmit={e => handleSubmit(e)}>
             <InputComponent
              label="First Name"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="John"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              
            />
             <InputComponent
              label="Last Name"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="Doe"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              
            />
            <InputComponent
              label="Email"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="email@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
            />

            <PasswordInput
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="*******"
            />

            <PasswordInput
              label="Confirm Password"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="*******"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <div className="pt-2">
              <ButtonLinks
              onClick={e => handleSubmit(e)}
                to=""
                size="md"
                color="primary"
                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-0 ${password !== confirmPassword ? 'opacity-50 cursor-not-allowed' : ''}`}
                
                disabled= {password !== confirmPassword || loading}
              >
                {loading ? 'Loading...': 'Sign up'}
               
              </ButtonLinks>
            </div>
             {/* display success message */}
        {register && (
          <p className="text-purple-700 ">You Are Registered Successfully</p>
        )}
        {error &&  (
          <p className="text-red-600">You Are Not Registered</p>
        )}
          </form>

          <div className="mt-6 text-center">
            <TextComponent
              text="Already have an account?"
              className="text-sm text-gray-600 inline mr-1"
            />
            <Link
              to="/log-in"
              className="text-purple-600 hover:text-purple-800 text-sm font-medium"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;