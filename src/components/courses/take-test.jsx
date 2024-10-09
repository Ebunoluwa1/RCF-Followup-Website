/* eslint-disable react/jsx-key */
import { AlarmClock, ArrowLeft } from 'lucide-react';
import React from 'react';
import TextComponent from './../common/text';
import { Button} from '../common';

const TakeTest = () => {
const answers =[
  {title : 'A gift from God'},
  {title : 'A gift from God'},
  {title : 'A gift from God'},
  {title : 'A gift from God'},
]
  return (
    <div className='max-w-7xl flex flex-col mx-auto px-4 sm:px-6 lg:px-8 py-11 bg-white shadow-md rounded-lg '>
       <div className='flex flex-row items-center justify-between'>
            <span className='bg-[#D895E9] rounded-lg  shadow-md transition duration-300 p-1 text-white'>
              <ArrowLeft />
            </span>

            <main> 02 of 10</main>

            <button className='flex justify-between items-center  mb-1 bg-[#D895E9] rounded-full shadow-md transition duration-300 py-1 px-2'>
                <span className='px-2 space-x-2'>
                    <AlarmClock className='w-4 h-4 '/>
                </span>
                <p className='text-white '>03:42</p>
            </button>
        
       </div>
       
       <div><hr className='border-solid border-purple-700 border-t-4 rounded-sm w-98 my-6' ></hr></div>
         {/* questions */}
       <div className=' flex flex-col justify-center'>
         <TextComponent className='my-2' text='What is Salvation?'
         />
         
         <hr className='border-solid border-[#EAEAEA] border-t-2 w-98 mb-6' ></hr>
       
         <ul className='flex flex-col gap-4'>
           {answers.map((answer) => (
            <li className='rounded-md border p-3 hover:cursor-pointer transition hover:bg-gray-100'>  {answer.title}
            </li>
           ))}
         </ul>

       </div>

       <div className='flex flex-row items-center justify-center gap-4 my-8'>
        
        <button className='w-96 bg-white border-[#8D2DA5]
         text-[#8D2DA5] border-2 hover:bg-[#8D2DA5] hover:transition hover:duration-300  px-4 py-2 hover:text-white inline-block rounded-md font-semibold text-center '>Previous</button>
         <Button size='md' className='w-96 bg-[#8D2DA5] hover:bg-purple-700 text-white  font-light'>Next</Button>
       </div>
    </div>
  );
}

export default TakeTest;
