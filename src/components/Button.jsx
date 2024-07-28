import PropTypes from 'prop-types';

const Button = ({ text, isActive, onClick, className }) => {
  const buttonStyle = isActive
    ? `bg-blue-500 text-white rounded py-4 px-2 w-full ${className}`
    : `bg-gray-500 text-white rounded py-4 px-2 w-full opacity-40 ${className}`;

  return (
    <button
      onClick={onClick}
      className={buttonStyle}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
