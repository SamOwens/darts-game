import { PropTypes } from 'prop-types';

const FinishedGame = ({ visible }) => {
  return (
    <div className={visible ? '' : 'hidden'}>
      <h1>Finished Game</h1>
    </div>
  );
};

export default FinishedGame;

FinishedGame.propTypes = {
  visible: PropTypes.bool.isRequired,
};
