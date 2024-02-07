import React from 'react'
import { addTodo } from '../../features/todo/todoSlicer'
import { useDispatch } from 'react-redux'

export const Navbar = () => {
   const dispatch = useDispatch()

   function generateRandomId(length) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';

      for (let i = 0; i < length; i++) {
         const randomIndex = Math.floor(Math.random() * charset.length);
         result += charset[randomIndex];
      }

      return result;
   }

   return (
      <div className='flex bg-base-300 w-full justify-between p-2 items-center'>
         <div className='w-1/3'>
            <button
               className='btn btn-secondary btn-outline rounded-full sm:tooltip sm:tooltip-right sm:tooltip-accent'
               data-tip="Add todo"
               onClick={() => {
                  dispatch(addTodo({ id: generateRandomId(16), content: `Task ${generateRandomId(6)}` }))
               }}
            ><i className="bi bi-plus text-lg"></i></button>
         </div>
         <div className='w-1/3 flex justify-center'>
            <button className='btn btn-ghost hidden sm:inline-flex'>To do or not to do?</button>
         </div>
         <div className='flex gap-2 w-1/3 items-center justify-end'>
            <button className='btn btn-accent btn-outline'>Sign up</button>
            <button className='btn btn-primary btn-outline'>Sign in</button>
         </div>
      </div>
   )
}
