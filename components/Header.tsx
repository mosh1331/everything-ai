import { cn } from '@/lib/utils'
import React from 'react'

interface HeaderProps {
  title: string
  description: string
  icon: any
  iconColor?: string
  bgColor?: string
}
const Header = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor
}: HeaderProps) => {
  return (
    <div className='px-4 lg:px-8 flex items-center mb-8 gap-x-3'>
      <div className={cn('p-2 rounded-md w-fit', bgColor)}>
        <Icon className={cn('w-10 h-10', iconColor)} />
      </div>
      <div>
      <h2 className='text-3xl font-bold'> {title}</h2>
      <p className="text-sm text-muted-foreground   ">{description}</p>
      </div>
    </div>
  )
}

export default Header
