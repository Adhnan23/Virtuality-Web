import { Link } from 'react-router-dom';

const GradientButton = ({ text, to, className = '' }) => {
  return (
    <Link 
      to={to}
      className={`
        inline-block py-2 px-6 
        rounded-full 
        font-medium text-white 
        bg-gradient-to-r from-[#0182fc] to-[#6d0778] 
        hover:shadow-lg 
        transition duration-300 
        w-fit
        ${className}
      `}
    >
      {text}
    </Link>
  )
}

export default GradientButton;