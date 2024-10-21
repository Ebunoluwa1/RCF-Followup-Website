import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonLinks } from "../components/common";
import { InputComponent } from "../components/common/input";
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const { forgotPassword, loading, error, success, clearMessages } = useAuth(); // Destructure forgotPassword and states from useAuth
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      // If the password reset request is successful, show a success message and navigate after 2 seconds
      setMessage("A password reset email has been sent to your email address.");
      setTimeout(() => {
        navigate("/reset-your-password");
      }, 2000);
    }
  }, [success, navigate]);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages
    forgotPassword(email)
      .then(() => {
        // The success handling is managed by useAuth hook
        clearMessages();
      })
      .catch((err) => {
        console.error("Forgot password error:", err);
      });
  };

  return (
    <div className="min-h-[calc(100vh-320px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="flex flex-shrink-0 text-center text-lg font-bold">
            Forgot Password
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center gap-8 my-8">
          <InputComponent
            label="Email"
            labelClassName="text-[#757575] mb-4 px-3 block"
            placeholder="email@example.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="w-full px-8 flex justify-center">
            <ButtonLinks
              to=""
              size="md"
              color="primary"
              onClick={handleForgotPassword}
              disabled={loading}
              className={loading ? "opacity-70" : ""}
            >
              {loading ? "Sending..." : "Send me a mail"}
            </ButtonLinks>
          </div>

          {/* Display success or error messages */}
          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
