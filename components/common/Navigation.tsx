import useScroll from '@/hooks/useScroll'
import React, { useEffect, useState } from 'react'
import { Logo, PrimaryButton } from '..'
import { DATA } from '@/utils/DATA'
import { ICONS } from '@/utils/ICONS'
import Link from 'next/link'

const Navigation = () => {
  const { scrollTop, scrollHeight, clientHeight } = useScroll()
  const scrolled = (scrollTop / (scrollHeight - clientHeight) * 100)
  console.log(scrolled)

  const Indicator = () => {
    return (
      <div className='w-full bg-cstm_lightgray h-1'>
        <div className="bg-cstm_black" style={{ width: scrolled + "%", height: "100%" }}></div>
      </div>
    )
  }
  return (
    <nav className=' top-0 sticky w-full ' id='about'>
      <Indicator />
      <header className='flex justify-between items-center mx-auto max-w-[80rem] bg-white p-4'>
        <Logo />
        <div className='flex gap-10'>
          {DATA.NAV.map(item => (
            <Link
              key={item}
              href={`#${item.toLocaleLowerCase()}`}
              className='font-medium'>
              <button>
                {item}
              </button>
            </Link>
          ))}
        </div>
        <PrimaryButton bg_color='bg-cstm_black' color='text-white'>{ICONS.EMAIL} Hire Me</PrimaryButton>
      </header>
    </nav>
  )
}

export default Navigation