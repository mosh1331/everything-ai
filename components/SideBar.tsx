'use client'

import React from 'react'
import { Montserrat } from 'next/font/google'
import { cn } from '@/lib/utils'
import { AiFillGitlab, AiFillHome } from 'react-icons/ai'
import Link from 'next/link'
import { BsImageFill } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import {
  LuLayoutDashboard,
  LuMessagesSquare,
  LuVideo,
  LuMusic,
  LuCode,
  LuSettings
} from 'react-icons/lu'

const monteserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const SideBar = () => {
  const routes = [
    {
      href: '/dashboard',
      id: 1,
      icon: LuLayoutDashboard,
      title: 'Dashboard',
      color: 'text-sky-500'
    },
    {
      href: '/conversation',
      id: 2,
      icon: LuMessagesSquare,
      title: 'Conversations',
      color: 'text-violet-700'
    },
    {
      href: '/image',
      id: 3,
      icon: BsImageFill,
      title: 'Image Generator',
      color: 'text-pink-700'
    },
    {
      href: '/video',
      id: 4,
      icon: LuVideo,
      title: 'Video Generator',
      color: 'text-orange-700'
    },
    {
      href: '/music',
      id: 5,
      icon: LuMusic,
      title: 'Music Generator',
      color: 'text-emerald-700'
    },
    {
      href: '/code',
      id: 6,
      icon: LuCode,
      title: 'Code Generator',
      color: 'text-green-700'
    },
    {
      href: '/settings',
      id: 6,
      icon: LuSettings,
      title: 'Settings',
      color: 'text-white'
    }
  ]

  const pathname = usePathname()

  return (
    <div className='px-4 py-16 bg-gray-900 h-full text-white '>
      <div className='flex items-center mb-16'>
        <AiFillGitlab size={30} style={{ color: '#fff' }} />
        <h2 className={cn('text-2xl text-white ml-2', monteserrat.className)}>
          Everything Ai
        </h2>
      </div>

      <div className='flex flex-col '>
        {routes.map(i => {
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`text-sm w-full py-4 px-2 group hover:bg-white/10 transition ease-in-out    ${
                pathname === i.href
                  ? 'text-white bg-white/10'
                  : ' text-zinc-400'
              }`}
            >
              <div className={`flex items-center `}>
                <i.icon className={cn('h-5 w-5 mr-3', i.color)} />
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
