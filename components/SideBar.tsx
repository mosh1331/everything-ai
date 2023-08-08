"use client"

import React from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { AiFillGitlab, AiFillHome  } from 'react-icons/ai'
import Link from 'next/link'
import { BsImageFill } from "react-icons/bs";
import {usePathname } from 'next/navigation'

const monteserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const SideBar = () => {
  const routes = [
    { href: '/dashboard', id: 1, icon: AiFillHome , title: 'Dashboard' ,color:'text-emerald-500'},
    { href: '/Image', id: 2, icon: BsImageFill , title: 'Image Generator',color:'text-pink-700' }
  ]

  const pathname = usePathname()

  return (
    <div className='px-4 py-16'>
      <div className='flex items-center mb-16'>
        <AiFillGitlab size={30} style={{ color: '#fff' }} />
        <h2 className={cn('text-2xl text-white ml-2', monteserrat.className)}>
          Everything Ai
        </h2>
      </div>

    <div className="flex flex-col ">
        {routes.map(i => {
            return (
                <Link key={i.href} href={i.href} className={`text-sm w-full py-4 px-2 group hover:bg-white/10  ${pathname === i.href ? 'text-white bg-white/10': ' text-zinc-400' }`} >
                    <div className={`flex items-center `}>
                        <i.icon className={cn("h-5 w-5 mr-3",i.color)} />
                        <h3 className='text-white '>{i.title}</h3>
                    </div>
                </Link>
            )
        })}
    </div>

    </div>
  )
}

export default SideBar
