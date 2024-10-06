import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'


export const InputComponent = ({
  label,
  type = "text",
  onChange,
  disabled,
  className,
  value,
  labelClassName,
  inputClassName,
  placeholder,
  inputWrapper,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col items-start ${className || ''}`}>
      {label && (
        <label className={`text-sm leading-4 mb-1 ${labelClassName || ''}`}>
          {label}
        </label>
      )}
      <div className={`w-full sm:min-w-[384px] flex items-center ${inputWrapper || ''}`}>
        <input
          className={`w-full py-3 px-2 text-sm border leading-4 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 ${inputClassName || ''}`}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  )
}

export const PasswordInput = ({
  label,
  onChange,
  disabled,
  className,
  value,
  labelClassName,
  inputClassName,
  placeholder,
  inputWrapper,
  ...props
}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={`w-full flex flex-col items-start ${className || ''}`}>
      {label && (
        <label className={`text-sm leading-4 mb-1 ${labelClassName || ''}`}>
          {label}
        </label>
      )}
      <div className={`w-full sm:min-w-[384px] border rounded-md px-2 focus:ring-2 focus:ring-purple-100 focus:border-purple-300 flex items-center ${inputWrapper || ''}`}>
        <input
          className={`w-full py-3 px-2 text-sm leading-4 focus:outline-none ${inputClassName || ''}`}
          type={visible ? 'text' : 'password'}
          color=''
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          className="ml-2 p-1 focus:outline-none rounded-md"
        >
          {visible ? (
            <Eye className="h-5 w-5 text-gray-500" />
          ) : (
            <EyeOff className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  )
}


export const CheckInput = ({
  label,
  labelClassName,
  inputClassName,
  checked,
  onChange,
  className,
  ...props
}) => {
  return (
    <div className={`flex items-center ${className || ''}`}>
      <input
        type="checkbox"
        checked={checked}
        className={`mr-2 h-4 w-4 rounded border border-gray-300 text-purple-600 focus:ring-purple-500 ${inputClassName || ''}`}
        onChange={onChange}
        {...props}
      />
      <label className={`text-sm leading-6 ${labelClassName || ''}`}>
        {label}
      </label>
    </div>
  )
}

export const SelectInput = ({
  label,
  labelClassName,
  inputClassName,
  className,
  options,
  placeholder,
  value,
  onChange,
  disabled,
  inputWrapper,
  ...props
}) => {
  console.log(options)
  return (
    <div className={`w-full flex flex-col items-start ${className || ''}`}>
      {label && (
        <label className={`text-sm leading-4 mb-1 ${labelClassName || ''}`}>
          {label}
        </label>
      )}
      <div className={`w-full sm:min-w-[384px] flex items-center ${inputWrapper || ''}`}>
        <select
          className={`w-full py-3 px-2 text-sm leading-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 ${inputClassName || ''}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export const DateInput = ({
  label,
  labelClassName,
  inputClassName,
  onChange,
  className,
  value,
  disabled,
  placeholder,
  inputWrapper,
  ...props
}) => {
  return (
    <div className={`w-full flex flex-col items-start ${className || ''}`}>
      {label && (
        <label className={`text-sm leading-4 mb-1 ${labelClassName || ''}`}>
          {label}
        </label>
      )}
      <div className={`w-full sm:min-w-[384px] flex items-center ${inputWrapper || ''}`}>
        <input
          type="date"
          className={`w-full py-3 px-2 text-sm leading-4 rounded-md border focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-300 ${inputClassName || ''}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  )
}