import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { rcfLogo } from "../assets";
import { DateInput, InputComponent, SelectInput } from "../components/common/input";
import { category, hostel, gender, Baptized, level } from "./data";
import { useAuth } from '../context/AuthContext';

const UserDetails = () => {
  const { user, loading, error, updateUserDetails, isAuthenticated } = useAuth(); // Destructure states and functions from useAuth
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "",
    phoneNumber: "",
    gender: "",
    hostel: "",
    department: "",
    level: "",
    baptized: "",
    birthday: "",
  });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const [redirectTimeout, setRedirectTimeout] = useState(null);

  useEffect(() => {
    console.log("isAuthenticated: ", user, isAuthenticated);

    if (!user || !isAuthenticated) {
      // Set a timeout to redirect after 3 seconds
      const timer = setTimeout(() => {
        if (!isAuthenticated) {
          navigate("/log-in");
        }
      }, 2000); // Delay of 3 seconds

      // Store the timeout ID to clear it later if needed
      setRedirectTimeout(timer);

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    } else if (user) {
      // Clear the redirect timeout if the user is authenticated
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
        setRedirectTimeout(null); // Reset the timeout state
      }

      // Populate form fields with user data
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        category: user.category || "",
        phoneNumber: user.phoneNumber || "",
        gender: user.gender || "",
        hostel: user.hostel || "",
        department: user.department || "",
        level: user.level || "",
        baptized: user.baptized || "",
        birthday: user.birthday || "",
      });
    }
  }, [user, isAuthenticated, navigate, redirectTimeout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    // Call the updateUserDetails function from useAuth
    updateUserDetails(formData)
      .then(() => {
        setMessage("Your details have been updated successfully.");
      })
      .catch((err) => {
        console.error("Update details error:", err);
        setMessage("An error occurred while updating your details.");
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link to="/" className="flex-shrink-0">
            <img src={rcfLogo} alt="RCF logo" className="w-12 h-12" />
          </Link>

          <h1 className="text-2xl font-semibold text-gray-900">My Details</h1>

          <form className="w-full space-y-6" onSubmit={handleSubmit}>
            <InputComponent
              label="Full Name"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="John Doe"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />

            <InputComponent
              label="Email"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="email@gmail.com"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled // Email should not be editable
            />

            <SelectInput
              label="Category"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Follow up"
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={category}
            />

            <InputComponent
              label="Phone Number"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="080-4567-789"
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <SelectInput
              label="Gender"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Male"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              options={gender}
            />

            <SelectInput
              label="Hostel"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Biobaku"
              name="hostel"
              value={formData.hostel}
              onChange={handleChange}
              options={hostel}
            />

            <InputComponent
              label="Department"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Biology Education"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />

            <SelectInput
              label="Level"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="300"
              name="level"
              value={formData.level}
              onChange={handleChange}
              options={level}
            />

            <SelectInput
              label="Have you been Baptized in the Holy Ghost?"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="..."
              name="baptized"
              value={formData.baptized}
              onChange={handleChange}
              options={Baptized}
            />

            <DateInput
              label="Birthday"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="..."
              name="birthday"
              value={formData.birthday}
              onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
            />

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Details"}
              </button>
            </div>
          </form>

          {/* Display success or error messages */}
          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
