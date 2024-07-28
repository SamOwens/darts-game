import { useState } from 'react';

import NewGame from './templates/NewGame';
import ActiveGame from './templates/ActiveGame';
import FinishedGame from './templates/FinishedGame';

function App() {
  const [newGame, setNewGame] = useState(true);
  const [activeGame, setActiveGame] = useState(false);
  const [finishedGame, setfinishedGame] = useState(false);

  return (
    <div>
      <NewGame visible={newGame} />
      <ActiveGame visible={activeGame} />
      <FinishedGame visible={finishedGame} />
    </div>
  );
}

export default App;
