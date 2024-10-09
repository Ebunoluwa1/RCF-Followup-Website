/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { Button } from "../common"
import { LockKeyhole } from "lucide-react"
import { courses } from '../.././pages/data'




function CourseCard({ title, lessonNumber }) {
  
const navigate =useNavigate();

  function handleCourse() {
         navigate('/take-course');
  }
  return (
    <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-900">Lesson {lessonNumber}</h3>
        <LockKeyhole className="w-4 h-4 text-gray-500" />
      </div>
      <p className="text-lg font-semibold text-gray-900 mb-4">{title}</p>
      <Button onClick={handleCourse} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
        Take course
      </Button>
    </div>
  )
}

export default function NewConvertCourses() {

  return (
    <div className="max-w-7xl mx-auto px-4 pt-5 md:pt-16 pb-20">
      <h2 className="text-3xl md:text-4xl font-medium text-purple-800 tracking-wider mb-12 text-center">New Convert Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} lessonNumber={course.lessonNumber} />
        ))}
      </div>
    </div>
  )
}