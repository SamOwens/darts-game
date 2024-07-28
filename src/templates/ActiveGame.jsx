import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDartboardValues } from '../utils/dartboardUtils';
import Button from '../components/Button';

const ActiveGame = ({ difficulty, rounds, endGame, setResults }) => {
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

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen p-6">
      <h1 className="text-white font-semibold mb-6">
        Round {currentRound} / {rounds}
      </h1>
      <p className="text-7xl text-green-500 mb-10 block">{currentValue}</p>
      <div className="flex gap-4 w-full mb-4">
        <Button
          text="x1"
          isActive={true}
          onClick={() => handleHit(1)}
        />
        <Button
          text="x2"
          isActive={true}
          onClick={() => handleHit(2)}
        />
        <Button
          text="x3"
          isActive={true}
          onClick={() => handleHit(3)}
        />
        <Button
          text="Miss"
          isActive={true}
          onClick={handleMiss}
        />
      </div>
      <Button
        text="Back"
        isActive={true}
        onClick={handleBack}
      />
    </div>
  );
};

ActiveGame.propTypes = {
  difficulty: PropTypes.string.isRequired,
  rounds: PropTypes.number.isRequired,
  endGame: PropTypes.func.isRequired,
  setResults: PropTypes.func.isRequired,
};

export default ActiveGame;
