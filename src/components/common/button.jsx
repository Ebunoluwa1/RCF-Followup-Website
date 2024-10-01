import React from "react";

// Button Component with support for variants (size, color, etc.)
export const Button = ({
  children,
  color = "rose",     // Default color variant
  size = "md",         // Default size variant
  onClick,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={` 
        ${classes.base} 
        ${classes.color[color]} 
        ${classes.size[size]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

// ButtonLink Component for buttons that act as links
export const ButtonLinks = ({
  href = "#",
  children,
  color = "rose",     // Default color variant
  size = "md",        // Default size variant
  className = "",
  ...props
}) => {
  return (
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
  );
};

// Shared CSS classes
const classes = {
  base: "inline-block rounded-md font-semibold text-center",  // Base styles for all buttons
  color: {
    rose: "bg-purple-600 hover:bg-purple-700 text-white",      // Rose color variant
    grey: "bg-gray-600 hover:bg-gray-700 text-white",          // Grey color variant
  },
  size: {
    sm: "px-3 py-1.5 text-sm",     // Small button size
    md: "px-5 py-2.5 text-base",   // Medium button size (default)
    lg: "px-8 py-3 text-lg",       // Large button size
  },
};
