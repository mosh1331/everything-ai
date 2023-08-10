import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './MobileSidebar'
// import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex p-4 bg-amber-500 text-white '>
      <MobileSidebar />
      <div className='flex items-center justify-end w-full'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  )
}

export default Navbar
