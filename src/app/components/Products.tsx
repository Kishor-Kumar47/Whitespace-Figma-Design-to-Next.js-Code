import Image from 'next/image';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const Products = () => {
  return (
    <section id='products' className='w-[1920px] h-[1588px] top-[921px] left-[1px] py-[140] px-[220] gap-[100px] justify-items-center py-[130px]'>
        <div className='w-[1480px] h-[547px] gap-[60px] flex items-center'>
          <div className='w-[672px] h-[288px] gap-[24px]'>
            <h1 className='w-[672px] h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]'>Project Management</h1>
            <p className='w-[672px] h-[90px] font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529]'>
              Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
            </p>

            <div className='w-[201px] h-[63px] rounded-[6px] py-[20px] px-[40px]  bg-[#4F9CF9] gap-[10px] flex items-center text-white'>
                <button className='w-[97px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF] '>
                 Get Started 
                </button>
                <FaArrowRight/>
            </div>
          </div>
          <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
        </div>

        <div className='w-[1480px] h-[661px] gap-[100px] flex items-center mt-[80px]'>
          <div className='w-[710px] h-[661px] '>
            <Image
            src={'/Pro.png'}
            width={710}
            height={661}
            alt='img'
            />
          </div>
          <div className='w-[670px] h-[294px] gap-[60px]'>
          <h1 className='w-[672px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]'>Work together</h1>
          <p className='w-[670px] h-[60px] font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#212529]'>
            With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>

          <div className='w-[186px] h-[63px] rounded-[6px] py-[20px] px-[40px]  bg-[#4F9CF9]  flex items-center text-white'>
                <button className='w-[82px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF] '>
                  Try it now 
                </button>
                <FaArrowRight/>
            </div>
            
          </div>
        </div>
    </section>
  )
}

export default Products