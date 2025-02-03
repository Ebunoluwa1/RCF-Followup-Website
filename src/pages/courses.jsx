import React from 'react'
import NewConvertCourses from '../components/courses'
import { CourseProvider } from '../context/CourseContext'
// import { useCourse } from '../context/CourseContext'

const CoursesPage = () => {

  return (
    <CourseProvider>
      <NewConvertCourses/>
    </CourseProvider>
  )
}

export default CoursesPage