import React from 'react'
import { Button } from './ui/button'
import { LuMenu } from 'react-icons/lu'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import SideBar from './SideBar'

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
    <Button variant={'ghost'} size={'icon'} className='md:hidden '>
      <LuMenu />
    </Button>
    </SheetTrigger>
    <SheetContent side="left" className='md:hidden p-0'>
    <SideBar />
    </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar
