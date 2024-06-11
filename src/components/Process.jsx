import React from 'react'
import process from '../assets/img/wp_1.png'

function Process() {
  return (

    <div className='bg-[#fafafa]'>
        <h1 className='text-center font-bold text-[25px] mt-[10px] md:mt-4'>Working Process</h1>
        <div className='max-w-[1240px] mx-auto py-5'>
            <div className='md:grid grid-cols-2'>
                <div className='col-span-1 flex items-center py-3'>
                    <p className='text-justify p-3'>My working approach revolves around a structured process: define, develop, test, refine, finalize, and launch. Initially, I clearly define project goals and requirements. Development follows, where I build the core features and functionalities. Rigorous testing ensures the code meets quality standards and performs optimally. After testing, I refine the project, addressing any issues and improving performance. Once finalized, the project is ready for launch, ensuring a polished, reliable, and user-ready product.</p>
                </div>
                <div className='col-span-1 flex justify-center items-center'>
                    <img src={process} className='w-[80%] md:w-[50%]' alt="processImage"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process