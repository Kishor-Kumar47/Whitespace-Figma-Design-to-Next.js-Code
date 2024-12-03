import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navebar = () => {
  return (
    <header>
        <div className='w-[1920px] h-[92px] justify-between py-[16px] px-[220px] bg-[#043873] flex items-center'>
            <div className='justify-between'>
                <Image className=''
                src={'/Logo.png'}
                width={191}
                height={34}
                alt='logo'

                />
            </div>
            <div className='w-[737.5px] h-[60px] gap-[60px] flex items-center'>
                <div className='  '>
                    <ul className='w-[549px] h-23px flex gap-[32px] text-white '>
                        <li>  <Link href={'#products'} >Products</Link></li>
                        <li>  <Link href={'#solutions'} >Solutions</Link></li>
                        <li>  <Link href={'#resources'} >Resources</Link></li>
                        <li>  <Link href={'#pricing'} >Pricing</Link></li>
                    </ul>
                </div>
                <div className='w-[126px] h-[60px] gap-[24px]'>
                    <button className='rounded-xl px-[40px] py-[16px] gap-[10px] bg-[#FFE492]'>
                        Login
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navebar