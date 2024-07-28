import DifficultySelect from '../components/DifficultySelect';
import RoundsSelect from '../components/RoundsSelect';
import Button from '../components/Button';

import { PropTypes } from 'prop-types';

const NewGame = ({ visible }) => {
  return (
    <div className={visible ? '' : 'hidden'}>
      <div className="flex flex-col items-center justify-center h-screen w-screen p-4">
        <DifficultySelect></DifficultySelect>
        <RoundsSelect></RoundsSelect>
        <Button
          text="Start Game"
          type="primary"
        ></Button>
      </div>
    </div>
  );
};

export default NewGame;

NewGame.propTypes = {
  visible: PropTypes.bool.isRequired,
};
