// TodoItem.js
import React from 'react';
import { useDrop } from 'react-dnd';

const DoneItems = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'TODO',
    drop: (item) => onDrop(item.id),
  });

  return (
    <div
      ref={drop}
      className='grow flex flex-col gap-2 bg-base-200 rounded-lg p-2 w-full'
    >
      <p className='flex items-center justify-center gap-2'><i className="bi bi-check-square text-xl"></i> Done:</p>
      {children}
    </div>
  );
};

export default DoneItems;
