import PropTypes from 'prop-types';

const FinishedGame = ({ results }) => {
  const accuracy = ((results.hits / results.attempts) * 100).toFixed(2);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen text-green-500">
      <h1>Game Finished</h1>
      <p>Total Hits: {results.hits}</p>
      <p>Darts Thrown: {results.attempts}</p>
      <p>Accuracy: {accuracy}%</p>
    </div>
  );
};

FinishedGame.propTypes = {
  results: PropTypes.shape({
    hits: PropTypes.number.isRequired,
    attempts: PropTypes.number.isRequired,
  }).isRequired,
};

export default FinishedGame;
