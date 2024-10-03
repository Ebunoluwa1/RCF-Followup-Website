
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Eye,EyeOff } from 'lucide-react';

export const InputComponent = ({ label,type, onChange, disabled,className, value, labelClassName,inputClassName, placeholder}) => {

  return (
    <form>
       <div className={`w-full flex flex-col items-center ${className || ''}`}>
          <div className='flex flex-col items-left'>
              {label && (
                <p className={`text-sm leading-4 ${labelClassName || ''}`}>{label}
                
              </p>
              )}
              
                <div className='min-w-96 border-1 border-solid border-gray-300 rounded-md flex items-left px-3'>
                  <input className={`w-full border box-border py-3 px-2 text-sm leading-4 rounded-md flex-grow focus:outline-none  focus:ring-purple-100 focus:border-purple-300 ${inputClassName}`}
                    
                    type={type}
                    value={value}
                     onChange={onChange}
                     placeholder={placeholder}
                    disabled={disabled}
                    />
                </div>
              
          </div>
       </div>
    </form>
  )
}


export const PasswordInput = ({label, onChange, disabled,className, value, labelClassName,inputClassName, placeholder}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='w-full' >
       <div className={`w-full flex flex-col items-center ${className || ''}`}>
          <div className='flex flex-col items-left'>
              {label && (
                <p className={`text-sm leading-4 ${labelClassName || ''}`}>{label}
                
              </p>
              )}
              
                <div className='min-w-96 border-1 border-solid border-gray-300 rounded-md flex items-left px-3'>
                    <input className={`w-full border box-border py-3 px-2 text-sm leading-4 rounded-md flex-grow focus:outline-none  focus:ring-purple-100 focus:border-purple-300 ${inputClassName}`}
                      
                      type={visible ? 'text' : 'password'}
                      value={value}
                      onChange={onChange}
                      placeholder={placeholder}
                      disabled={disabled}
                    />
                    {visible ? (
                      <Eye 
                      className='h-8 w-8 -ml-[1.7em] p-2 ' onClick={()=> setVisible(!visible)}/>
                    ):(
                    <EyeOff  
                    className="h-8 w-8 grid place-items-center p-2 text-purple-300 -ml-[1.7em]" 
                    onClick={()=> setVisible(!visible)}
                       />)}
                 </div>
              
          </div>
       </div>
    </div>
  )
}

export const CheckInput = ({label, labelClassName,inputClassName, checked, onChange, className}) =>{

 return(
  <div className='w-full'>
     <div className={`flex items-center ${className || ''}`}>
        <input 
         type='checkbox'
         checked={checked}
         className={`mr-2 ${inputClassName|| ''} `}
         onChange={onChange}
        />
        <div className={`text-sm leading-6 text-[] ${labelClassName}`}>{label}</div>
     </div>
  </div>
 )}

 export const SelectInput = ({label, labelClassName,inputClassName, checked, onChange, className,   options,type,
  placeholder,
 value,
 inputWrapper,
disabled}) =>{

 return( 
  <form>
  <div className={` w-full flex flex-col items-center ${className || ''}`}>
     <div className={'flex-col items-left'}>
        {label && (
                <p className={`text-sm leading-4 ${labelClassName || ''}`}>{label}
                
              </p>
              )}
         
        <div className={`min-w-96 border-1 border-solid border-gray-300 rounded-md flex items-left px-3 ${inputWrapper}`}>
        
        <select className={`w-full border box-border py-3 px-2 text-sm leading-4 rounded-md flex-grow focus:outline-none  focus:ring-purple-100 focus:border-purple-300 ${inputClassName}`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          value={value}
         >

          {options.map((item) => (
                <option key={Math.random()}>{item.value}</option>
              ))}
        </select>

      </div>
       
        
     </div>
  </div>
 </form>
 )}

  export const DateInput = ({label, labelClassName,inputClassName, checked, onChange, className,   options,type,
  placeholder,
 value,
 inputWrapper,
disabled}) =>{

 return( 
  <form>
  <div className={` w-full flex flex-col items-center ${className || ''}`}>
     <div className={'flex-col items-left'}>
        {label && (
                <p className={`text-sm leading-4 ${labelClassName || ''}`}>{label}
                
              </p>
              )}
         
        <div className={`min-w-96 border-1 border-solid border-gray-300 rounded-md flex items-left px-3 ${inputWrapper}`}>
        
        <input className={`w-full border box-border py-3 px-2 text-sm leading-4 rounded-md flex-grow focus:outline-none  focus:ring-purple-100 focus:border-purple-300 ${inputClassName}`}
          placeholder={placeholder}
          type='date'
          disabled={disabled}
          onChange={onChange}
          value={value}
         />

      </div>
      </div>
  </div>
 </form>
 )}