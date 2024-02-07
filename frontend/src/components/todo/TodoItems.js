// TodoItem.js
import React from 'react';
import { useDrop } from 'react-dnd';

const TodoItems = ({ onDrop, children }) => {
  const [, drop] = useDrop({
    accept: 'DONE',
    drop: (item) => onDrop(item.id),
  });

  return (
    <div
      ref={drop}
      className='grow flex flex-col gap-2 bg-base-200 rounded-lg p-2 w-full'
    >
      <p className='flex items-center justify-center gap-2'><i className="bi bi-list-task text-xl"></i> To-do:</p>
      {children}
    </div>
  );
};

export default TodoItems;
