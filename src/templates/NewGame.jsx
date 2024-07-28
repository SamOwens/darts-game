import PropTypes from 'prop-types';
import DifficultySelect from '../components/DifficultySelect';
import RoundsSelect from '../components/RoundsSelect';
import Button from '../components/Button';

const NewGame = ({ setDifficulty, setRounds, startGame }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-4">
      <DifficultySelect setDifficulty={setDifficulty} />
      <RoundsSelect setRounds={setRounds} />
      <Button
        text="Start Game"
        isActive={true}
        onClick={startGame}
      />
    </div>
  );
};

NewGame.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
  setRounds: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
};

export default NewGame;
