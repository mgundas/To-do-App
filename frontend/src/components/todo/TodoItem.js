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
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
      className=' cursor-move bg-base-200 text-white p-2 hover:bg-base-100'
    >
      {content}
    </div>
  );
};

export default TodoItem;
