/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { ArrowRight, LogIn } from 'lucide-react';
import { Button } from '../common';


export default function AttendanceCard({title, date}){

    return(
         <div className='rounded-lg bg-pink-50 p-4 shadow-sm'>
             <div className='flex justify-between items-center  mb-1'>
                 <span className='rounded-lg bg-[#F9DEFF] p-2'>
                <LogIn className='w-5 h-5 text-[#505050] bg-[#F9DEFF]'/>
                </span>
                <h3 className='text-sm text-[#797979'>Check in</h3>
             </div>
            <h3 className='pb-2 text-[#505050] font-bold text-lg  w-[60%]'>{title}</h3>
            <p className='text-sm text-[#A6A6A6'>{date}</p>
         </div>
    )
} 



export const Attendance  = () => {
 const frequencies = [
    { title: "First Sunday attendance",  
        date: '06-Nov-2024' },
    { title: "Second Sunday attendance",
         date: '06-Nov-2024' },
    { title: "First Sunday attendance",  
        date: '06-Nov-2024' },
    { title: "Second Sunday attendance",
         date: '06-Nov-2024' },
    { title: "First Sunday attendance",  
        date: '06-Nov-2024' },
    { title: "First Sunday attendance",  
        date: '06-Nov-2024' },

  ];
  return (
    <div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11'>
            <div>
               <h1 className="text-4xl font-medium md:text-4xl tracking-wider text-center mb-12 text-[#460057]">
                First timer's attendance
                </h1> 
            </div>
            {/* the columns */}
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-11 md:gap-16  lg:gap-8 comic-neue-regular'>
               {frequencies.map((frequency,index) => (
               <AttendanceCard key={index} title={frequency.title} date={frequency.date} />
              
               ))}
            </div>

           <div className=' flex items-center justify-center m-8 '>
             <Button 
            className="bg-purple-600 hover:bg-purple-700 text-white justify-between items-center gap-4 flex mb-1 " >
                 <span className='rounded-lg bg-white p-2'>
                <ArrowRight className='w-5 h-5 text-[#953FAA] '/>
                </span>
              
                 Swipe to mark attendance 
             </Button>
           </div>
        </div>
    </div>
  )
}

