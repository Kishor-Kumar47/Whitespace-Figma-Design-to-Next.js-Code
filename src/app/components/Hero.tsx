import React from 'react'

const Hero = () => {
  return (
    <section className='w-[1920px] h-[829px] top-[92px] left-[1px] py-[140] px-[220] bg-[#043873] flex justify-center items-center '>
        <div className='w-[656px] h-[361px] gap-[60px] '>
            <div className='w-[656px] h-[238px] gap-[24px] '>
                <h2 className='w-[656px] h-[154px]  font-bold text-[64px]  leading-[77.45px] tracking-[-2%] text-[#FFFFFF] mb-9'>
                  Get More Done with whitepace
                </h2>
                <p className='w-[656px] h-[60px] font-normal text-[18px] leading-[30px] text-[#FFFFFF] tracking-[-2%]  '>
                  Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
                </p>
                
            </div>
            <div className='w-[219px] h-[63px] p-[20px] gap-[10px] rounded-[8px] bg-[#4F9CF9] mt-[60px]'>
                <button className='w-[170px] h-[23px] font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF] '>
                  Try Whitepace free
                </button>
            </div>
        </div>
        <div className='w-[824px] h-[549px] gap-[4px] bg-[#C4DEFD]'></div>
    </section>
  )
}

export default Hero