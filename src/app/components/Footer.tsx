
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-[1920px] h-[461px] top-[3626px] py-[140px] px-[220px] bg-[#043873] gap-[200px] '>
        <div className='w-[1480px] h-[289px] gap-[100px]'>
            <div className='w-[1480px] h-[169px] gap-[100px] flex'>
                <div className='w-[295px] h-[169px] gap-[15px]'>
                    <Image
                    alt='logo'
                    src={'/Logo.png'}
                    width={191}
                    height={34}
                    />

                    <p className='w-[240px] h-[120px] font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#F7F7EE]'>
                    whitepace was created for the new ways we live and work. We make a better workspace around the world
                    </p>

                </div>
                <div className='w-[295px] h-[127px] gap-[14px] text-white space-y-[20px] '>
                    <p className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF] '>Product</p>
                  <ul className='space-y-[20px]'>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%]  hover:text-[#FFE492] ' href={'#links'}>Overview</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Pricing</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Customer stories</Link> </li>
                  </ul>
                </div>
                <div className='w-[295px] h-[127px] gap-[14px] text-white space-y-[20px] '>
                    <p className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF] '>Resources</p>
                  <ul className='space-y-[20px]'>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%]  hover:text-[#FFE492] ' href={'#links'}>Blog</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Guides & tutorials</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Help center</Link> </li>
                  </ul>
                </div>
                <div className='w-[295px] h-[127px] gap-[14px] text-white space-y-[20px] '>
                    <p className='w-[68px] h-[22px] font-bold text-[18px] leading-[21.78px] tracking-[-2%] text-[#FFFFFF] '>Company</p>
                  <ul className='space-y-[20px]'>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%]  hover:text-[#FFE492] ' href={'#links'}>About us</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Careers</Link> </li>
                      <li> <Link className='w-[70px] h-[20px] font-normal text-[16px] leading-[20px] tracking-[-2%] hover:text-[#FFE492] ' href={'#links'}>Media kit</Link> </li>
                  </ul>
                </div>
                
            </div>

            <hr className='w-[1480px] mt-[80px]' />


            <div className='w-[1480px] h-[20px] justify-between mt-7 justify-items-center  '>
                <p className='w-[180px] h-[20px] gap-[60px] font-normal text-[16px] leading-[20px] tracking-[-2%]  text-[#FFFFFF] '>©2021 Whitepace LLC.</p>
            </div>

        </div>
            
    </footer>
  )
}

export default Footer