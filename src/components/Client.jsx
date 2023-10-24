import React from 'react'
import cl1 from '../assets/img/client/clntb.png';
import cl2 from '../assets/img/client/clnt.png'
import cl3 from '../assets/img/client/nt.png';
import cl4 from '../assets/img/client/mnt1.png';
import cl5 from '../assets/img/client/mnt2.png';



function Client() {
  return (
    <div className='bg-[#fafafa]'>
        <div className='max-w-[1240px] mx-auto py-4'>

            <h1 className='font-bold text-[30px] text-center'>Our Clients</h1>
            <div className='md:grid grid-cols-6'>

                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl2} className='w-full md:h-[70%]' alt="cl2" />
                </div>
                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl3} className='w-full md:h-[70%]' alt="cl2" />
                </div>
                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl1} className='w-full  md:h-[70%]' alt="cl1" />
                </div>
                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl4} className='w-full  md:h-[70%]' alt="cl4" />
                </div>
                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl2} className='w-full md:h-[70%]' alt="cl2" />
                </div>

                <div className='col-span-1 flex text-center items-center p-5'>
                    <img src={cl5} className='w-full md:h-[70%]' alt="cl5" />
                </div>
      
            </div>
        </div>
    </div>
  )
}

export default Client