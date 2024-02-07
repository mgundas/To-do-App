// TodoItem.js
import React from 'react';
import { useDrag } from 'react-dnd';

const TodoItem = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'TODO',
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className='hover:bg-base-100 p-2'
    >
      {content}
    </div>
  );
};

export default TodoItem;
