import Button from './Button';

const DifficultySelect = () => {
  return (
    <div className="flex justify-between w-full gap-2 mb-4">
      <Button
        text="Easy"
        type="primary"
      />
      <Button
        text="Intermediate"
        type="disabled"
      />
      <Button
        text="Hard"
        type="disabled"
      />
    </div>
  );
};

export default DifficultySelect;
