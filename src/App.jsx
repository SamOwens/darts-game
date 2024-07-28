import { useState } from 'react';
import NewGame from './templates/NewGame';
import ActiveGame from './templates/ActiveGame';
import FinishedGame from './templates/FinishedGame';

function App() {
  const [gameState, setGameState] = useState('new');
  const [difficulty, setDifficulty] = useState('Easy');
  const [rounds, setRounds] = useState(1);
  const [results, setResults] = useState({ hits: 0, attempts: 0 });

  const startGame = () => {
    setGameState('active');
  };

  const endGame = (gameResults) => {
    setResults(gameResults);
    setGameState('finished');
  };

  const leaveEarly = () => {
    setGameState('new');
  };

  const startNewGame = () => {
    setGameState('new');
    setDifficulty('Singles');
    setResults({ hits: 0, attempts: 0 });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      {gameState === 'new' && (
        <NewGame
          setDifficulty={setDifficulty}
          setRounds={setRounds}
          startGame={startGame}
        />
      )}
      {gameState === 'active' && (
        <ActiveGame
          difficulty={difficulty}
          rounds={rounds}
          endGame={endGame}
          setResults={setResults}
          leaveEarly={leaveEarly}
        />
      )}
      {gameState === 'finished' && (
        <FinishedGame
          results={results}
          startNewGame={startNewGame}
        />
      )}
    </div>
  );
}

export default App;
