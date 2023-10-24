import React from 'react'
import tech from '../assets/img/tech.PNG';

function Tech() {
  return (
    <div className='max-w-[1240px] mx-auto py-5'>
        <h1 className='font-bold text-[24px] md:text-[30px] text-gray-400 text-center'>Technologies we use...</h1>

        <div className='md:grid grid-cols-2'>
            <div className='col-span-1 flex items-center'>
                <img src={tech} alt="tech" />
            </div>
            <div className='col-span-1 flex items-center'>
                <p className='text-justify p-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam animi delectus aspernatur earum rerum at iste asperiores inventore, velit eos alias possimus porro? Minima magnam corrupti voluptas, error nesciunt sed Nolor sit, amet consectetur adipisicing elit. Ipsam animi delectus aspernatur earum rerum at iste asperiores inventore, velit eos alias possimus porro? Minima magnam corrupti voluptas, error nesciunt sed.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Tech