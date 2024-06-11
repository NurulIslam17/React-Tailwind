import React from 'react'
import explore from '../assets/img/explore1.png'

function Explore() {
  return (
    <div className='max-w-[1240px] mx-auto py-[50px] md:grid grid-cols-2'>
        <div className='col-span-1 w-[80%]'>
            <img src={explore} alt="explore" />
        </div>
        <div className='col-span-1 flex flex-col p-3'>
            <h1 className='font-bold text-2xl text-gray-400 py-3 text-center md:text-left'>Explore Some code</h1>
            <p className='text-justify mb-3'>With a programming strategy honed since 2017, I have successfully worked on over five personal projects, each providing valuable insights and practical experience. My journey in the tech industry has been further enriched by nearly two years of professional experience, where I applied my skills in real-world scenarios, solving complex problems and contributing to various development teams. This blend of independent project work and industrial experience has equipped me with a robust understanding of software development, enabling me to deliver high-quality solutions and stay updated with the latest technological advancements.</p>
            <div className='text-center md:text-left'>
              <a href='https://github.com/NurulIslam17' target="_blank" type="button" className="w-[40%] md:w-[15%] font-bold py-1 px-5 mr-2 mb-2 text-sm text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Explore</a>
            </div>
        </div>
    </div>
  )
}

export default Explore