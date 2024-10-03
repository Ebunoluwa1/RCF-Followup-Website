import { Link } from 'react-router-dom'
import { useState } from 'react';
import { rcfLogo } from '../assets'
import { ButtonLinks } from '../components/common';
import {  DateInput, InputComponent, SelectInput } from '../components/common/input';
import  {category,hostel, gender, Baptized, level} from './data';

const UserDetails = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className=''>
        <div className='flex flex-col items-center justify-center '>
            <div className="flex items-center my-4">
              <Link to="/" className="flex-shrink-0">
                <img src={rcfLogo} alt="RCF logo" width={40} height={40} />
              </Link>
              </div>

            <div>
              <div className='flex flex-shrink-0 text-center text-md'>
                  My Details
              </div>
           </div>

           
            {/* form */}
            <div className=' flex flex-col
            justify-center'>
                <div className='pt-8 pb-4 px-8 '>
                  <InputComponent 
                  label='Full Name'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='John Doe'
                 />
                </div>
                 
                  <div className='mb-4 '>
                  <InputComponent 
                  label='Email'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='email@gmail.com'
                
                  />
                </div>
                    {/* category */}
                  <div className='mb-4 '>
                  <SelectInput
                  label='Category'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='Follow up'
                  options={category}
                   />
                </div>

                <div className=' mb-4'>
                  <InputComponent
                  label='Phone Number'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='080-4567-789'
                   />
                </div>
                <div className='mb-4 '>
                  <SelectInput
                  label='Gender'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='Male'
                  options={gender}
                   />
                </div>
                <div className='mb-4 '>
                  <SelectInput
                  label='Hostel'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='Biobaku'
                  options={hostel}
                   />
                </div>
                  <div className='mb-4 '>
                  <InputComponent 
                  label='Department'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='Biology Education'
                
                  />
                </div>
                <div className='mb-4 '>
                  <SelectInput
                  label='Level'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='300'
                  options={level}
                   />
                </div>
                 <div className='mb-4 '>
                  <SelectInput
                  label='Have you been Baptized in the Holyghost?' 
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='...'
                  options={Baptized}
                   />
                </div>
                  
                    <div className='mb-4'>
                      <DateInput
                        label='Birthday'
                        labelClassName={`text-[#757575] mb-4 px-3 block`}
                        placeholder='...'
                        value={date}
                        onChange={handleDateChange}
                      />
                    </div>
                 
               <div className='w-full px-8 flex justify-center'>
                 <ButtonLinks to='' size="md" color='primary' className='w-96' >
                  Update Details
                </ButtonLinks>
               </div>
                 
                
                  </div>
            </div>
        </div>
 
  )
}

export default UserDetails