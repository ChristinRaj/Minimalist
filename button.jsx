import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary', // primary, secondary, outline
  size = 'medium', // small, medium, large
  fullWidth = false,
  as = 'button',
  href,
  to,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...props
}) => {
  // Base styles
  const baseStyles = 'inline-block text-center font-medium transition-all duration-300 focus:outline-none';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-accent',
    secondary: 'bg-secondary text-primary hover:bg-secondary-dark',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white',
  };
  
  // Size styles
  const sizeStyles = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  };
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

  // Framer Motion animation
  const buttonAnimation = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 }
  };

  // Render based on the 'as' prop
  if (as === 'link' && href) {
    return (
      <motion.a
        href={href}
        className={combinedStyles}
        {...buttonAnimation}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  if (as === 'router-link' && to) {
    return (
      <motion.div {...buttonAnimation}>
        <Link
          to={to}
          className={combinedStyles}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...buttonAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;