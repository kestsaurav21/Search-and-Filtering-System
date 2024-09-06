import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart,AiOutlineUserAdd } from 'react-icons/ai'
const NavBar = () => {
  return (
    
    <nav className='flex justify-around items-center ml-8 p-[20px] border-b-2 border-b-slate-300 z-999'>
      <div >
        <input className='pr-20 pl-2 py-2 border-none bg-gray-200 outline-none mr-20 w-[14rem] '
        type="text" placeholder='Search' />
      </div>
      <div className='flex justify-around gap-4'>
        <a className='no-underline text-gray-600'
        href="#">
          <FiHeart className='w-8 h-8 ml-8'/>
        </a>
        <a className='no-underline text-gray-600'
        href="#">
          <AiOutlineShoppingCart className='w-8 h-8 ml-8'/>
        </a>
        <a className='no-underline text-gray-600'
        href="#">
          <AiOutlineUserAdd className='w-8 h-8 ml-8' />
        </a>
      </div>
    </nav>
  )
}

export default NavBar