import PropTypes from 'prop-types';

const RoundsSelect = ({ setRounds }) => {
  const handleRoundsChange = (e) => {
    setRounds(parseInt(e.target.value, 10));
  };

  return (
    <div className="mb-4 w-full">
      <h1 className="block mb-2 text-center text-white">Select Rounds</h1>
      <input
        type="number"
        id="rounds"
        name="rounds"
        onChange={handleRoundsChange}
        className="p-2 w-full text-center rounded"
      />
    </div>
  );
};

RoundsSelect.propTypes = {
  setRounds: PropTypes.func.isRequired,
};

export default RoundsSelect;
