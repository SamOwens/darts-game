import PropTypes from 'prop-types';
import DifficultySelect from '../components/DifficultySelect';
import RoundsSelect from '../components/RoundsSelect';
import Button from '../components/Button';

const NewGame = ({ setDifficulty, setRounds, startGame }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 m-4 md:w-1/2 w-full bg-gray-900 rounded-xl">
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
