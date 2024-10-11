
import { AlarmClock, AlarmClockOff, ArrowLeft } from 'lucide-react';
import {useState,useEffect} from 'react';
import TextComponent from './../common/text';
import { Button} from '../common';
import { Link } from 'react-router-dom';

const TakeTest = () => {
 const [time, setTime] = useState(300);
  const [isActive, setIsActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0); 
 
  // Stopwatch logic
  useEffect(() => {
    let interval = null;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const handleStart = () => {
    setIsActive(!isActive);
  };

  const FormatTime =(seconds) => {
    const minutes = Math.floor(seconds/60);
    const secs = seconds % 60;
    return `${minutes}: ${secs < 10 ? '0': ''}${secs}`;
  }
 const handlePrevious = ()=> {
   if(currentQuestion > 0 ){
    setCurrentQuestion ((prev) => prev - 1)
   }
 } 
 const handleNext = ()=> {
   if(currentQuestion < tests.length - 1){
    setCurrentQuestion ((prev) => prev + 1)
   }
 } 

  // make a progress bar by creating a function to get the percentage of progress based on the current position

  const getProgresspercentage = () => {
    return((currentQuestion + 1) / tests.length) * 100;
  }
const tests = [
  
{index:1, 
  questions: 'What is Salvation?', 
  answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},

{index:2, 
  questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:3, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:4, 
  questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:5, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:6, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:7, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:8, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:9, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
{index:10, 
questions: 'What is Salvation?',  
answers :[
{ title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},
 {title : 'A gift from God'},]},
]
  return (
    <div className='max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-11 bg-white shadow-md rounded-lg '>
       <div className='flex flex-row items-center justify-between'>
            <span className='bg-[#D895E9] rounded-lg  shadow-md transition duration-300 p-1 text-white'  >
             <Link to='/take-course'> <ArrowLeft /></Link>

            </span>

            <main> {currentQuestion + 1} of {tests.length}</main>

            <button onClick={handleStart} className='flex justify-between items-center  mb-1 bg-[#D895E9] rounded-full shadow-md transition duration-300 py-1 px-2'>
                <span className='px-2 space-x-2'>
                   {isActive ? (<AlarmClock className='w-4 h-4 '/>) : (<AlarmClockOff className='w-4 h-4 '/>)}
                    
                </span>
                <p className='text-white '>{FormatTime(time)}</p>
            </button>
        
       </div>
       {/* progress bar */}
       <div className='relative w-full h-2 bg-gray-300 rounded-full my-6'>
          <div className='absolute top-0 left-0 h-full bg-purple-700 rounded-full transition-all duration-500' style={{ width: `${getProgresspercentage()}%` }}></div> 
       </div>

         {/* questions and answers*/}
       <div className=' flex flex-col justify-center'>
          
          <div >
                    <TextComponent className='my-2' text={tests[currentQuestion].questions} 
                    />
          
          
          <hr className='border-solid border-[#EAEAEA] border-t-2 w-98 mb-6' ></hr>
        
          <ul className='flex flex-col gap-4'>
            {tests[currentQuestion].answers.map((answer, idx) => (
              <li key={idx} className='rounded-md border p-3 hover:cursor-pointer transition hover:bg-gray-100'>  {answer.title}
              </li>
            ))}
          </ul>
          </div>
       
       </div>

       <div className='flex flex-row items-center justify-center gap-4 my-8'>
        
        <button onClick={handlePrevious} className={`w-96 bg-white border-[#8D2DA5]
         text-[#8D2DA5] border-2  hover:transition hover:duration-300  px-4 py-2  inline-block rounded-md font-semibold text-center ${currentQuestion === 0 ? 'opacity-50 cursor-not-allowed': 'hover:bg-[#8D2DA5] hover:text-white'} `}
         disabled={currentQuestion === 0}>Previous</button>
         <Button onClick={handleNext} size='md' className={`w-96 bg-[#8D2DA5] text-white font-light ${currentQuestion === tests.length - 1 ? 'opacity-50 cursor-not-allowed': 'hover:bg-purple-700'}`} 
         disabled={currentQuestion === tests.length -1}>Next</Button>
       </div>
    </div>
  );
}

export default TakeTest;
