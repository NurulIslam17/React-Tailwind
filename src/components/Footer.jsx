import React from 'react'
import { FaFacebook,FaLinkedin,FaSquareInstagram,FaSquareXTwitter,FaSquareWhatsapp,FaSquareGithub,FaStackOverflow } from "react-icons/fa6";

function Footer() {
  return (

    <div className='bg-[black] text-white'>
        <div className='max-w-[1240px] mx-auto py-[20px]'>
            <div className='md:grid grid-cols-3'>
                <div className='w-[100%] p-3'>
                    <h1 className='font-bold text-[25px] text-center'>Address</h1>
                    <h1 className='font-bold text-[15px]'>Head Office:</h1>
                    <p>Mirpur, Dhaka</p>
                    <p>Bangladesh</p>

                </div>
                <div className='w-[100%] bg-info p-3'>
                    <h1 className='font-bold text-[25px] text-center mb-3'>Connnect Us.</h1>
                    <h1 className='font-bold text-[15px] pb-5'>Social Links:</h1>
                    <div className='flex flex-row'>
                        <a href="https://www.facebook.com/profile.php?id=100016800183418" target='_blank' className='text-3xl pe-3' ><FaFacebook/></a>
                        <a href="https://www.linkedin.com/in/nurul-islam-5732461b3/"  target='_blank'  className='text-3xl pe-3' ><FaLinkedin/></a>
                        <a href="https://www.instagram.com/nurul_istagram/"  target='_blank' className='text-3xl pe-3' ><FaSquareInstagram/></a>
                        <a href="#" className='text-3xl pe-3' ><FaSquareXTwitter/></a>
                        <a href="#" className='text-3xl pe-3' ><FaSquareWhatsapp/></a>
                    </div>
                    <h1 className='font-bold text-[15px] py-3'>Others:</h1>
                    <div className='flex flex-row'>
                        <a href="https://github.com/NurulIslam17" target='_blank' className='text-3xl pe-3' ><FaSquareGithub/></a>
                        <a href="#" className='text-3xl pe-3' ><FaStackOverflow/></a>
                    </div>
    
                </div>
                <div className='w-[100%] p-3'>
                    <h1 className='font-bold text-[25px] text-center'>About</h1>
                    <p className='text-justify'>A Software Dvelopment company serving more than 50 companies since 2010. We belive in customer satisfaction and provide best sulutation to client as they are acpected.</p>
                </div>
            </div>
        </div>
        <div>
            <p className='text-center py-3'>&#169;  All Right Reserved By DevSoft. 2023</p>
        </div>
    </div>
  )
}

export default Footer