import { PropTypes } from 'prop-types';

const ActiveGame = ({ visible }) => {
  return (
    <div className={visible ? '' : 'hidden'}>
      <h1>Active Game</h1>
    </div>
  );
};

export default ActiveGame;

ActiveGame.propTypes = {
  visible: PropTypes.bool.isRequired,
};
