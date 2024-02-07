import React, { useState } from 'react'
import TodoItems from '../components/todo/TodoItems';
import DoneItems from '../components/todo/DoneItems';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TodoItem from '../components/todo/items/TodoItem';
import DoneItem from '../components/todo/items/DoneItem';

export const Todo = () => {
   const [todoItems, setTodoItems] = useState([
      { id: 1, content: 'Task 1' },
      { id: 2, content: 'Task 2' },
      // Add more tasks as needed
   ]);
   const [doneItems, setDoneItems] = useState([
      { id: 3, content: 'Task 3' },
      { id: 4, content: 'Task 4' },

   ]);


   const handleDropToTODO = (itemId) => {
      const droppedItem = doneItems.find((item) => item.id === itemId);

      setDoneItems((prevDoneItems) =>
      prevDoneItems.filter((item) => item.id !== itemId)
      );
      setTodoItems((prevTodoItems) => [...prevTodoItems, droppedItem]);
   };

   const handleDropToDONE = (itemId) => {
      const droppedItem = todoItems.find((item) => item.id === itemId);

      setTodoItems((prevTodoItems) =>
         prevTodoItems.filter((item) => item.id !== itemId)
      );
      setDoneItems((prevDoneItems) => [...prevDoneItems, droppedItem]);
   };

   return (
      <DndProvider backend={HTML5Backend}>
         <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
            <TodoItems onDrop={handleDropToTODO} >
               {todoItems.map((item) => (
                  <TodoItem key={item.id} {...item} />
               ))}
            </TodoItems>
            <DoneItems onDrop={handleDropToDONE} >
               {doneItems.map((item) => (
                  <DoneItem key={item.id} {...item} />
               ))}
            </DoneItems>
         </div>
      </DndProvider>
   )
}
