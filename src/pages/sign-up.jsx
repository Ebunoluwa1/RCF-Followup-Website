import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { rcfLogo } from "../assets";
import TextComponent from "../components/common/text";
import { ButtonLinks } from "../components/common";
import { InputComponent, PasswordInput } from "../components/common/input";
import GoogleSignIn from "./google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const SignUp = () => {
  const [nav, setNav] = useState("signIn");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/sign-up") {
      setNav("signUp");
    } else if (location.pathname === "/log-in") {
      setNav("signIn");
    }
  }, [location]);

  const handleSignIn = () => {
    setNav("signIn");
    navigate("/log-in");
  };

  const handleSignUp = () => {
    setNav("signUp");
    navigate("/sign-up");
  };

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

          <form className="w-full space-y-6">
            <InputComponent
              label="Email"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="email@gmail.com"
              type="email"
            />

            <PasswordInput
              label="Password"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="*******"
            />

            <PasswordInput
              label="Confirm Password"
              labelClassName="text-sm font-medium text-gray-700"
              placeholder="*******"
            />

            <div className="pt-2">
              <ButtonLinks
                to=""
                size="md"
                color="primary"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign up
              </ButtonLinks>
            </div>
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