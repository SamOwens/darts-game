import PropTypes from 'prop-types';

const Button = ({ text, type }) => {
  const buttonStyle = {
    primary: 'bg-white rounded p-2 w-full',
    disabled: 'bg-white rounded p-2 w-full opacity-40',
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <button
      className={buttonStyle[type]}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'disabled']).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
