import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { rcfLogo } from "../assets";
import { ButtonLinks } from "../components/common";
import { InputComponent, PasswordInput } from "../components/common/input";
import useAuth from "../hooks/useAuth"; // Import the custom useAuth hook

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { resetPassword, loading, error, success, clearMessages } = useAuth(); // Destructure resetPassword and states from useAuth
  const navigate = useNavigate();

  useEffect(() => {
    clearMessages();
  },[])

  useEffect(() => {
    if (success) {
      // If password update is successful, show a success message and navigate after 2 seconds
      setMessage("Your password has been updated successfully.");
      setTimeout(() => {
        navigate("/log-in");
      }, 2000);
    }
  }, [success, navigate]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    // Check if the new password matches the confirmation
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirmation do not match.");
      return;
    }

    // Call the resetPassword function from useAuth
    resetPassword(currentPassword, newPassword)
      .then(() => {
        // The success handling is managed by useAuth hook
      })
      .catch((err) => {
        console.error("Reset password error:", err);
      });
  };

  return (
    <div className="min-h-[calc(100vh-320px)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center my-4">
          <Link to="/" className="flex-shrink-0">
            <img src={rcfLogo} alt="RCF logo" width={40} height={40} />
          </Link>
        </div>

        <div>
          <div className="flex flex-shrink-0 text-center text-md">
            Change Your Password
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col justify-center gap-8 my-8">
          <InputComponent
            label="Current Password"
            labelClassName="text-[#757575] mb-4 px-3 block"
            placeholder="*******"
            type="password"
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <PasswordInput
            label="New Password"
            labelClassName="text-[#757575] mb-4 px-3 block"
            placeholder="*******"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <PasswordInput
            label="Confirm New Password"
            labelClassName="text-[#757575] mb-4 px-3 block"
            placeholder="*******"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="w-full px-8 flex justify-center">
            <ButtonLinks
              to=""
              size="md"
              color="primary"
              onClick={handleResetPassword}
              disabled={loading}
              className={loading ? "opacity-70" : ""}
            >
              {loading ? "Updating..." : "Update Password"}
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

export default ResetPassword;
