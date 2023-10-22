import React from 'react'
import process from '../assets/img/wp_1.png'

function Process() {
  return (

    <div className='bg-[#fafafa]'>
        <h1 className='text-center font-bold text-[25px] mt-[10px] md:mt-4'>Working Process</h1>
        <div className='max-w-[1240px] mx-auto py-5'>
            <div className='md:grid grid-cols-2'>
                <div className='col-span-1 flex items-center py-3'>
                    <p className='text-justify p-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem cupiditate maxime optio repellendus voluptatibus! Magni veniam reprehenderit facilis totam optio, quod quos omnis aliquid placeat ullam soluta facere alias debitis.</p>
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