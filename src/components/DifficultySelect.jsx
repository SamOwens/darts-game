import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const DifficultySelect = ({ setDifficulty }) => {
  const [activeButton, setActiveButton] = useState(1);

  const buttons = [
    { id: 1, text: 'Singles' },
    { id: 2, text: 'Doubles' },
    { id: 3, text: 'Trebles' },
    { id: 4, text: 'Mixed' },
  ];

  const handleClick = (id, text) => {
    setActiveButton(id);
    setDifficulty(text);
  };

  return (
    <>
      <h1 className="text-center text-white p-2 mb-2 text-xl">Target Select</h1>
      <div className="flex justify-between w-full gap-2 mb-6">
        {buttons.map((button) => (
          <Button
            key={button.id}
            text={button.text}
            isActive={button.id === activeButton}
            onClick={() => handleClick(button.id, button.text)}
          />
        ))}
      </div>
    </>
  );
};

DifficultySelect.propTypes = {
  setDifficulty: PropTypes.func.isRequired,
};

export default DifficultySelect;
