import React, { useState } from 'react'
import TodoItem from '../components/todo/TodoItem';
import DoneItem from '../components/todo/DoneItem';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Todo = () => {
   const [todoItems, setTodoItems] = useState([
      { id: 1, content: 'Task 1' },
      { id: 2, content: 'Task 2' },
      // Add more tasks as needed
   ]);
   const [doneItems, setDoneItems] = useState([]);


   const handleDrop = (itemId) => {
      const droppedItem = todoItems.find((item) => item.id === itemId);

      setTodoItems((prevTodoItems) =>
         prevTodoItems.filter((item) => item.id !== itemId)
      );
      setDoneItems((prevDoneItems) => [...prevDoneItems, droppedItem]);
   };

   return (
      <DndProvider backend={HTML5Backend}>
         <div className='flex gap-2'>
            <div className='grow w-1/2 flex flex-col gap-2 bg-base-200 rounded-lg p-2'>
               <p className='text-center'>To-do:</p>
               {todoItems.map((item) => (
                  <TodoItem key={item.id} {...item} />
               ))}
            </div>
            <DoneItem onDrop={handleDrop}>
            <p className='text-center'>Done:</p>
               {doneItems.map((item) => (
                  <div key={item.id} className='bg-base-200 text-white p-2 hover:bg-base-100'>{item.content}</div>
               ))}
            </DoneItem>
         </div>
      </DndProvider>
   )
}
