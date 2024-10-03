
import { Link } from 'react-router-dom'
import { rcfLogo } from '../assets'
import { ButtonLinks } from '../components/common';
import {  InputComponent, PasswordInput } from '../components/common/input';


const ResetPassword = () => {

 
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
                  Change Password
              </div>
           </div>

           
            {/* form */}
            <div className=' flex flex-col
            justify-center'>
                <div className='pt-8 pb-4 px-8 '>
                  <InputComponent 
                  label='Current Password'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='*******'
                 />
                </div>

                <div className=' mb-4'>
                  <PasswordInput
                  label='New Password'
                  labelClassName={`text-[#757575] mb-4 px-3 block`}
                  placeholder='*******'
                   />
                </div>

                  <div className=' mb-4'>
                    <PasswordInput
                    label=' Confirm New Password'
                    labelClassName={`text-[#757575] mb-4 px-3 block`}
                    placeholder='*******'
                
                    />
                </div>

                 
               <div className='w-full px-8 flex justify-center'>
                 <ButtonLinks to='' size="md" color='primary' className='w-96' >
                  Update Password
                </ButtonLinks>
               </div>
                 
                
                  </div>
            </div>
        </div>
 
  )
}

export default ResetPassword