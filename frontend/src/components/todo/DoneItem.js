import React from 'react';
import { useDrop } from 'react-dnd';

const DoneItem = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'TODO',
    drop: (item) => onDrop(item.id),
  });

  return (
    <div
      ref={drop}
      className='grow w-1/2 flex flex-col gap-2 bg-base-200 rounded-lg p-2'
    >
      {children}
    </div>
  );
};

export default DoneItem;