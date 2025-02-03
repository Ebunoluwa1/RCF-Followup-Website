import { Button } from "../common";
import { useNavigate, useParams } from "react-router-dom";
import { useCourse } from "../../context/CourseContext";
import { useEffect, useState } from 'react';

const LessonDetail = () => {
  const { lessons, error}=useCourse()
   const [currentLesson, setCurrentLesson] =useState(null);
   const { lessonId } = useParams();

    useEffect(() => {
    console.log("Lessons array:", lessons);//gvs an array
  console.log("Lesson ID from URL:", lessonId);//undefined
   console.log("Lessons array:", lessons.map((lesson) => lesson._id));

  if( lessons.length > 0 && lessonId) {
     const lesson = lessons.find((lesson) => String(lesson._id) === lessonId);
      console.log("Found Lesson:", lesson);//gives access to module one due to the string
      
    setCurrentLesson(lesson);
  }
   
    
  }, [lessonId, lessons]);

  const navigate = useNavigate();
  function handleTest() {
    navigate("/take-test");
  } 
  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }
  
  if (!currentLesson) {
    return <div>Loading...</div>;
  }


// fetch lessons for each courses
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11">
          {/* < className="rounded-lg bg-gray-500 p-4 shadow-sm h-[80%]"> */}
              <div>
                {/* {lessons.forEach((lesson) => { */}
                <div key={currentLesson.id} className=""> 
                  
                <h3 className="text-3xl md:text-4xl font-light text-black tracking-wider mb-10 text-center mt-4">
                  {/* Lesson {lesson.no}- <br /> */}
                   {currentLesson.title}
                </h3>
                <hr className="border-solid border-[#EAEAEA] border-t-2 w-98 mb-6"></hr>
                
                <div>{currentLesson.content} </div>
                <div className=" flex items-center justify-center  m-8 ">
                  <Button
                    size="md"
                    onClick={handleTest}
                    className="w-96 bg-purple-600 hover:bg-purple-700 text-white  font-light"
                  >
                    Take Test
                  </Button>
                </div>
                </div>
              
                  {/* })} */}
              </div>
          {/* </> */}
    </div>
   
  );
};

export default LessonDetail;
