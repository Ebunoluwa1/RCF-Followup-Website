import { Link } from "react-router-dom";
import { useState } from "react";
import { rcfLogo } from "../assets";
import { ButtonLinks } from "../components/common";
import {
  DateInput,
  InputComponent,
  SelectInput,
} from "../components/common/input";
import { category, hostel, gender, Baptized, level } from "./data";

const UserDetails = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <Link to="/" className="flex-shrink-0">
            <img src={rcfLogo} alt="RCF logo" className="w-12 h-12" />
          </Link>

          <h1 className="text-2xl font-semibold text-gray-900">My Details</h1>

          <form className="w-full space-y-6">
            <InputComponent
              label="Full Name"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="John Doe"
            />

            <InputComponent
              label="Email"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="email@gmail.com"
              type="email"
            />

            <SelectInput
              label="Category"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Follow up"
              options={category}
            />

            <InputComponent
              label="Phone Number"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="080-4567-789"
              type="tel"
            />

            <SelectInput
              label="Gender"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Male"
              options={gender}
            />

            <SelectInput
              label="Hostel"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Biobaku"
              options={hostel}
            />

            <InputComponent
              label="Department"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="Biology Education"
            />

            <SelectInput
              label="Level"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="300"
              options={level}
            />

            <SelectInput
              label="Have you been Baptized in the Holy Ghost?"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="..."
              options={Baptized}
            />

            <DateInput
              label="Birthday"
              labelClassName="text-sm font-medium text-gray-700"
              inputClassName="mt-1"
              placeholder="..."
              value={date}
              onChange={handleDateChange}
            />

            <div className="pt-4">
              <ButtonLinks
                to=""
                size="md"
                color="primary"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Update Details
              </ButtonLinks>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;