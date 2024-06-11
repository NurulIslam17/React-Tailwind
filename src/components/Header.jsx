import React, { useState } from 'react'
import { FaGripVertical,FaAngleRight } from "react-icons/fa6";


function Header() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className='bg-[#dfe4ea] p-4'>
        <div className='max-w-[1240px] mx-auto item-center flex justify-between'>
            <div className='text-3xl font-bold'>
                @Soft
            </div>
            {
              toggle ? 
              <FaGripVertical onClick={()=> setToggle(!toggle)} className='text-2xl md:hidden block'/>
              :
              <FaAngleRight onClick={()=> setToggle(!toggle)} className='text-2xl md:hidden block'/>
            }
            <ul className='hidden md:flex bg justify-between gap-4'>
                <li>Contact</li>
            </ul>

            {/* Responsive menu */}

            <ul className={`duration-300 md:hidden h-screen w-full fixed bg-[#ced6e0] top-[68px] ${toggle ? 'left-[-100%]' : 'left-[0]'}`}>
                <li className='p-2'>Contact</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Header