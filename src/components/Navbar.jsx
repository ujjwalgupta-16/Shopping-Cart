import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../logo.png"
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"

const Navbar = () => {
  const { cart } = useSelector(state => state);

  return (
    <div className=' flex justify-between items-center h-20 max-w-6xl mx-auto bg-slate-900'>
      <div>
        <NavLink to='/' >
          <div className=' ml-5'>
            <img src={img} alt="" className='h-14' />
          </div>
        </NavLink>
      </div>

      <div className='flex items-center space-x-6 mr-5 font-medium text-slate-100 tracking-tighter'>
        <NavLink to='/' >
          <p className=' cursor-pointer hover:text-green-400 transition duration-300 ease-in'>Home</p>
        </NavLink>
        <NavLink to='/cart' >
          <div className='relative'>
            <FaShoppingCart className=' text-2xl cursor-pointer hover:text-green-400 transition duration-300 ease-in' height="1em" width="1em" />
            {
              cart.length > 0 && <div className='flex absolute bg-green-600 text-xs w-5 h-5 justify-center items-center animate-bounce -top-1 -right-2 rounded-full text-white'>{cart.length}</div>
            }
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar