import PropTypes from 'prop-types';
import Button from '../components/Button';

const FinishedGame = ({ results, startNewGame }) => {
  const accuracy = ((results.hits / results.attempts) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center p-8 m-4 md:w-1/2 w-full bg-gray-900 rounded-xl text-white">
      <h1 className="text-white mb-4 text-3xl">Game Finished</h1>
      <p className="mb-2">Total Hits: {results.hits}</p>
      <p className="mb-2">Darts Thrown: {results.attempts}</p>
      <p className="mb-8">Accuracy: {accuracy}%</p>
      <Button
        text="New Game"
        isActive={true}
        onClick={startNewGame}
        className="bg-green-500"
      />
    </div>
  );
};

FinishedGame.propTypes = {
  results: PropTypes.shape({
    hits: PropTypes.number.isRequired,
    attempts: PropTypes.number.isRequired,
  }).isRequired,
  startNewGame: PropTypes.func.isRequired,
};

export default FinishedGame;
