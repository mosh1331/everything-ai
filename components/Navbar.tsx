import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
// import { Menu } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-amber-500 text-white '>
        <Button variant={'ghost'} size={'icon'} className='hidden md:flex'>
            {/* <Menu /> */}
            Menu
        </Button>
        <UserButton afterSignOutUrl='/' />
    </div>
  )
}

export default Navbar