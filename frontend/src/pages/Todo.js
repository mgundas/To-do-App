import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import TodoItems from '../components/todo/TodoItems';
import DoneItems from '../components/todo/DoneItems';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TodoItem from '../components/todo/items/TodoItem';
import DoneItem from '../components/todo/items/DoneItem';
import { removeTodo, addTodo, removeDone, addDone } from "../features/todo/todoSlicer";

export const Todo = () => {
   const dispatch = useDispatch()
   const { todos, dones } = useSelector(state => state.todo)


   const handleDropToTODO = (itemId) => {
      const droppedItem = dones.find((item) => item.id === itemId);

      dispatch(removeDone(itemId));
      dispatch(addTodo(droppedItem));
   };

   const handleDropToDONE = (itemId) => {
      const droppedItem = todos.find((item) => item.id === itemId);

      dispatch(removeTodo(itemId));
      dispatch(addDone(droppedItem));
   };

   return (
      <DndProvider backend={HTML5Backend}>
         <div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
            <TodoItems onDrop={handleDropToTODO} >
               {todos.map((item) => (
                  <TodoItem key={item.id} {...item} />
               ))}
            </TodoItems>
            <DoneItems onDrop={handleDropToDONE} >
               {dones.map((item) => (
                  <DoneItem key={item.id} {...item} />
               ))}
            </DoneItems>
         </div>
      </DndProvider>
   )
}
