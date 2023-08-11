import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'
import { AvatarFallback } from '@radix-ui/react-avatar'

const BotAvatar = () => {
   
  return (
    <Avatar className='h-8 w-8'>
        <AvatarImage src={'/next.svg'} />
    </Avatar>
  )
}

export default BotAvatar