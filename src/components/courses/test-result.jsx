/* eslint-disable no-unused-vars */
import React from 'react';
import { congrats } from '../../assets';
import TextComponent from '../common/text';
import { Button, ButtonLinks } from '../common';

const TestResult = () => {

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-11'>
       <div> 
            <h3 className="text-3xl md:text-4xl font-semibold text-black tracking-wider mb-10 text-center mt-4">Congratulations!!</h3>
    
            <div className='flex flex-col items-center justify-center'>
                
            <img 
            src={congrats}
            alt="congrats img"
            width={100}
            height={100}
            className=""
            />

            <h3 className='my-6 text-[#333333]'> You Scored:
                <span className='text-purple-700 font-semibold'> 60%</span>
            </h3>

            </div>

            <div  className='flex flex-col items-center justify-center'>
                <TextComponent className='text-[#474747]' text='Champion!! You are one step closer.' />
                <TextComponent className='underline ring-offset-4 text-black font-medium cursor-pointer' text='Take next lesson' />
            </div>

            <div className='flex items-center justify-center m-8'>
            
            <ButtonLinks size='md' to='/result-corrections' className="w-96 bg-purple-600 hover:bg-purple-700 text-white  font-light" >View Result</ButtonLinks>
            </div>
        </div>
    </div>
  );
}

export default TestResult;
