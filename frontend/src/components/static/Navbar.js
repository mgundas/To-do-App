import React from 'react'

export const Navbar = () => {
   return (
      <div className='flex bg-base-300 w-full justify-between p-2 items-center'>
         <div className='w-1/3'>
            <button className='btn btn-secondary btn-outline rounded-full'><i class="bi bi-plus text-lg"></i></button>
         </div>
         <div className='w-1/3 flex justify-center'>
            <button className='btn btn-ghost'>To do or not to do?</button>
         </div>
         <div className='flex gap-2 w-1/3 items-center justify-end'>
            <button className='btn btn-accent btn-outline'>Sign up</button>
            <button className='btn btn-primary btn-outline'>Sign in</button>
         </div>
      </div>
   )
}
