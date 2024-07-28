import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDartboardValues } from '../utils/dartboardUtils';
import Button from '../components/Button';

const ActiveGame = ({
  difficulty,
  rounds,
  endGame,
  setResults,
  leaveEarly,
}) => {
  const [currentRound, setCurrentRound] = useState(1);
  const [dartboardValues, setDartboardValues] = useState([]);
  const [currentValue, setCurrentValue] = useState('');
  const [hits, setHits] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const values = getDartboardValues(difficulty);
    setDartboardValues(values);
    setCurrentValue(values[Math.floor(Math.random() * values.length)]);
  }, [difficulty]);

  const handleHit = (hitCount) => {
    setHistory([...history, { value: currentValue, hit: hitCount }]);
    setHits(hits + hitCount);
    handleNext(3, hitCount);
  };

  const handleMiss = () => {
    setHistory([...history, { value: currentValue, hit: 0 }]);
    handleNext(3, 0);
  };

  const handleNext = (dartCount, hitCount) => {
    const newAttempts = attempts + dartCount;
    const newHits = hits + hitCount;

    if (currentRound >= rounds) {
      setResults({ hits: newHits, attempts: newAttempts });
      endGame({ hits: newHits, attempts: newAttempts });
    } else {
      setAttempts(newAttempts);
      setCurrentValue(
        dartboardValues[Math.floor(Math.random() * dartboardValues.length)]
      );
      setCurrentRound(currentRound + 1);
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const last = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentValue(last.value);
      setAttempts(attempts - 3);
      setCurrentRound(currentRound - 1);
      setHits(hits - last.hit);
    }
  };

  const finishEarly = () => {
    setResults({ hits, attempts });
    endGame({ hits, attempts });
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 m-4 md:w-1/2 w-full bg-gray-900 rounded-xl">
      <h1 className="text-white font-semibold mb-6">
        Round {currentRound} / {rounds} - {difficulty} - 3 Darts
      </h1>
      <p className="text-7xl text-white mb-10 block">{currentValue}</p>
      <div className="flex gap-4 w-full mb-4">
        <Button
          text="1 Hit"
          isActive={true}
          onClick={() => handleHit(1)}
          className="bg-green-700"
        />
        <Button
          text="2 Hits"
          isActive={true}
          onClick={() => handleHit(2)}
          className="bg-green-600"
        />
        <Button
          text="3 Hits"
          isActive={true}
          onClick={() => handleHit(3)}
          className="bg-green-500"
        />
        <Button
          text="No Hits"
          isActive={true}
          onClick={handleMiss}
          className="bg-red-500"
        />
      </div>
      <Button
        text="Back"
        isActive={true}
        onClick={handleBack}
        className="bg-gray-500 mb-12"
      />
      <div className="flex gap-4 w-full">
        <Button
          text="New Game"
          isActive={true}
          onClick={leaveEarly}
          className="bg-gray-500"
        />
        <Button
          text="End Game"
          isActive={true}
          onClick={finishEarly}
          className="bg-gray-500"
        />
      </div>
    </div>
  );
};

ActiveGame.propTypes = {
  difficulty: PropTypes.string.isRequired,
  rounds: PropTypes.number.isRequired,
  endGame: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
  leaveEarly: PropTypes.func.isRequired,
};

export default ActiveGame;
