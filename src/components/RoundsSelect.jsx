import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RoundsSelect = ({ setRounds }) => {
  const [rounds, setLocalRounds] = useState(20);

  useEffect(() => {
    setRounds(20);
  }, [setRounds]);

  const handleRoundsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setLocalRounds(value);
    setRounds(value);
  };

  return (
    <div className="mb-4 w-full">
      <h1 className="block mb-2 text-center text-white text-xl">
        Select Rounds
      </h1>
      <input
        type="number"
        id="rounds"
        name="rounds"
        value={rounds}
        onChange={handleRoundsChange}
        className="p-2 w-full text-center rounded"
        inputMode="numeric"
      />
    </div>
  );
};

RoundsSelect.propTypes = {
  setRounds: PropTypes.func.isRequired,
};

export default RoundsSelect;
