import React from 'react'
import tech from '../assets/img/tech.PNG';

function Tech() {
  return (
    <div className='max-w-[1240px] mx-auto py-5'>
        <h1 className='font-bold text-[24px] md:text-[30px] text-gray-400 text-center'>Technologies I use...</h1>

        <div className='md:grid grid-cols-2'>
            <div className='col-span-1 flex items-center'>
                <img src={tech} alt="tech" />
            </div>
            <div className='col-span-1 flex items-center'>
                <p className='text-justify p-2'>I am proficient in frontend technologies such as HTML, CSS, Bootstrap, Ajax, jQuery, and React, enabling me to create dynamic and responsive user interfaces. On the backend, I have expertise in PHP, JavaScript, and Laravel, allowing me to develop robust and scalable server-side applications. Currently, I am expanding my skill set by learning Python and Django, which will further enhance my ability to build versatile and efficient web applications across different frameworks and technologies.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Tech