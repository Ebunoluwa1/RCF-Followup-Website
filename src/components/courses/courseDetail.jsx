/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../common";
import { LockKeyhole } from "lucide-react";
// import { courses } from "../.././pages/data";
import { useCourse } from "../../context/CourseContext";
import { useEffect,useState } from 'react';

function LessonCard({ id, title, lessonNumber }) {
  const navigate = useNavigate();

  function handleLesson(id) {
    navigate(`/take-lesson/${id}`);
  }
  return (
    <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-gray-900">
         Lesson- {lessonNumber}
        </h3>
        <LockKeyhole className="w-4 h-4 text-gray-500" />
      </div>
      <p className="text-md font-semibold text-gray-900 mb-4">{title}</p>
      <Button
        onClick={() => handleLesson(id)}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white"
      >
        Take Lesson
      </Button>
    </div>
  );
}

export default function CourseDetail() {
  //for coursecategories and each courses
  const { courseId } =useParams()
    const {fetchLessons, courses, loadingState, lessons, error} = useCourse()
    const [currentCourse, setCurrentCourse] =useState('');

  useEffect(() => {

     if (courses.length > 0 && courseId) {
     const course = courses.find((course) => String(course._id) === courseId);
      console.log("Found :", course);//gives access to module one due to the string
      if (course) {
        setCurrentCourse(course);
        fetchLessons(course._id); 
      }
     
  }

}, [ courseId, courses]);

  //indexJs  (showing the course) -> CourseDetail (shows the lesson details in the course) -> LessonDetail (clicking on a module shows the complete lesson with the assessment)
 
     if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }
  return (
    <div key={currentCourse._id} className="max-w-7xl mx-auto px-4 pt-5 md:pt-16 pb-20">
      <h2 className="text-3xl md:text-4xl font-medium text-purple-800 tracking-wider mb-12 text-center">
       
        {currentCourse.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {loadingState.lessons ? (
  <div className="text-center text-purple-800">Loading lessons...</div>
) : (
  lessons.map((lesson) => (
    <LessonCard
      id={lesson._id}
      key={lesson._id}
      title={lesson.title}
      lessonNumber={lesson.no}
    />
  ))
)}
      </div>
    </div>
  );
}
