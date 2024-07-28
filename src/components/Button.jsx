import PropTypes from 'prop-types';

const Button = ({ text, isActive, onClick }) => {
  const buttonStyle = isActive
    ? 'border-2 border-green-500 bg-green-500 text-black rounded p-2 w-full'
    : 'border-2 border-green-600 text-green-600 rounded p-2 w-full';

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
};

export default Button;
