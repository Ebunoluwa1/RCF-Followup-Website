// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
export const Button = ({children, color, background, width ,alt, onClick , style}) => {

  return (
    <button style={{
      color: `${color}`,
      width: `${width}`,
      background: `${background}`,

    }}
     onClick={onClick} className={` p-2 my-2 ${ 
      alt ? 'inline-block bg-Rose hover:bg-[#712c80]' : 'inline-block bg-slate-600 hover:bg-slate-700'
    } rounded-md text-white text-sm ${style}`}>
      {children}
    </button>
  )
}

const classes ={
  base: 'inline-block rounded-md',
  color: {
    rose: 'bg-Rose hover:bg-[#712c80] text-white',
    grey: ' bg-slate-600 hover:bg-slate-700 text-white',
  },
  size: {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-8 py-3',

  }
}

// export const ButtonLinks = ({href = '#',size='md', color='rose' className, children, ...props}) =>{
//   return(
//     <div>
//       <a href={href}
//       className={className $(`
//         ${classes.base}
//         ${classes.color}
//         ${classes.size}`
        
//        )}
//        {...props}
//       >
//           {children}
//       </a>
//     </div>
//   )
// }

// eslint-disable-next-line react/prop-types
export const ButtonLinks = ({ href = '#', size={size}, color={color}, className = '', children, ...props }) => {
  return (
    <div>
      <a
        href={href}
        className={`
          ${classes.base}
          ${classes.color[color]}
          ${classes.size[size]}
          ${className}
        `}
        {...props}
      >
        {children}
      </a>
      </div>
      )
}