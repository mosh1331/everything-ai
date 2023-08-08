import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='text-6xl text-amber-600'>LandingPage (unprotected)
    <Link href="/sign-in">
    <Button>Login</Button>

    </Link>
    <Link href="/sign-up">
    <Button variant={'ghost'}>Register</Button>

    </Link>
    </div>
  )
}

export default LandingPage